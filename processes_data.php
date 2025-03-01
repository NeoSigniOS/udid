<?php
$data = file_get_contents('php://input');
$plistBegin = '<?xml version="1.0"';
$plistEnd = '</plist>';
$pos1 = strpos($data, $plistBegin);
$pos2 = strpos($data, $plistEnd);
$data2 = substr($data, $pos1, $pos2 - $pos1);
$xml = xml_parser_create();
xml_parse_into_struct($xml, $data2, $vs);
xml_parser_free($xml);
$UDID = "";
$DEVICE_PRODUCT = "";
$DEVICE_VERSION = "";
$arrayCleaned = array();
foreach ($vs as $v) {
  if (isset($v['level']) && $v['level'] == 3 && isset($v['type']) && $v['type'] == 'complete') {
    $arrayCleaned[] = $v;
  }
}
for ($i = 0; $i < count($arrayCleaned); $i++) {
  $elem = $arrayCleaned[$i];
  if (!isset($elem['value'])) continue;
  switch ($elem['value']) {
    case "UDID":
      if (isset($arrayCleaned[$i + 1]['value'])) $UDID = $arrayCleaned[$i + 1]['value'];
      break;
    case "PRODUCT":
      if (isset($arrayCleaned[$i + 1]['value'])) $DEVICE_PRODUCT = $arrayCleaned[$i + 1]['value'];
      break;
    case "VERSION":
      if (isset($arrayCleaned[$i + 1]['value'])) $DEVICE_VERSION = $arrayCleaned[$i + 1]['value'];
      break;
  }
}
$params = "UDID=" . urlencode($UDID) . "&DEVICE_PRODUCT=" . urlencode($DEVICE_PRODUCT) . "&DEVICE_VERSION=" . urlencode($DEVICE_VERSION);
header("Location: /udid?" . $params, TRUE, 301);
exit;
?>