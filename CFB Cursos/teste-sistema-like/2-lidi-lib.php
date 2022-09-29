<?php
class Reactions {
  // (A) CONSTRUCTOR - CONNECT TO DATABASE
  private $pdo;
  private $stmt;
  public $error;
  function __construct () { try {
    $this->pdo = new PDO(
      "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=" . DB_CHARSET,
      DB_USER, DB_PASSWORD, [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_NAMED
    ]);
  } catch (Exception $ex) { exit($ex->getMessage()); }}

  // (B) DESTRUCTOR - CLOSE DATABASE CONNECTION
  function __destruct () {
    $this->pdo = null;
    $this->stmt = null;
  }

  // (C) HELPER FUNCTION - RUN SQL
  function query ($sql, $data=null) {
    $this->stmt = $this->pdo->prepare($sql);
    $this->stmt->execute($data);
  }

  // (D) GET REACTIONS FOR ID
  function get ($id, $uid=null) {
    // (D1) GET TOTAL REACTIONS
    $reacts = ["react" => [0, 0]]; // [likes, dislikes]
    $this->query(
      "SELECT `reaction`, COUNT(`reaction`) `total`
       FROM `reactions` WHERE `id`=?
       GROUP BY `reaction`", [$id]
    );
    while ($r = $this->stmt->fetch()) {
      if ($r["reaction"]==1) { $reacts["react"][0] = $r["total"]; }
      else { $reacts["react"][1] = $r["total"]; }
    }

    // (D2) GET REACTION BY USER (IF SPECIFIED)
    if ($uid != null) {
      $this->query(
        "SELECT `reaction` FROM `reactions` WHERE `id`=? AND `user_id`=?",
        [$id, $uid]
      );
      $reacts["user"] = $this->stmt->fetchColumn();
    }

    // (D3) DONE - RETURN RESULTS
    return $reacts;
  }

  // (E) SAVE REACTION
  function save ($id, $uid, $react) {
    // (E1) FORMULATE SQL
    if ($react == 0) {
      $sql = "DELETE FROM `reactions` WHERE `id`=? AND `user_id`=?";
      $data = [$id, $uid];
    } else {
      $sql = "REPLACE INTO `reactions` (`id`, `user_id`, `reaction`) VALUES (?,?,?)";
      $data = [$id, $uid, $react];
    }

    // (E2) EXECUTE SQL
    $this->query($sql, $data);
    return true;
  }
}

// (F) HANDLE AJAX CALLS
if (isset($_POST["req"])) {
  // (F1) DATABASE SETTINGS - CHANGE TO YOUR OWN!
  define("DB_HOST", "localhost");
  define("DB_NAME", "penio");
  define("DB_CHARSET", "utf8");
  define("DB_USER", "root");
  define("DB_PASSWORD", "");

  // (F2) DUMMY "USER ID" & "PRODUCT ID"
  $uid = 1; $pid = 900;

  // (F3) CREATE NEW CONTENT OBJECT
  $_REACT = new Reactions();

  switch ($_POST["req"]) {
    // (F4) INVALID REQUEST
    default: echo "Invalid request"; break;

    // (F5) GET REACTIONS
    case "get":
      echo json_encode($_REACT->get($pid, $uid));
      break;

    // (F6) SAVE REACTION
    case "save":
      if ($_REACT->save($pid, $uid, $_POST["react"])) {
        echo json_encode($_REACT->get($pid, $uid));
      } else { echo $_REACT->error ; }
      break;
  }
}