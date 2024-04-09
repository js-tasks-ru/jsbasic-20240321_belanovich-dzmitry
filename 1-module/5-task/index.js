function truncate(str, maxlength) {
  /*return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;*/
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}
