pdfgrep -rh '((((Fall|Spring), (Session) (A|B))|(Winter|Summer)) \(([0-9]+|[0-9]+/(A|B))\))|([a-zA-Z ]+ [0-9 ]+ [a-zA-Z ]+ (Classes|\*\*Classes) begin)' paged/. | grep -vE '\.'
