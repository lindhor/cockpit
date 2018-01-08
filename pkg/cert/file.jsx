var React = require("react");

var FileAutoComplete = require("cockpit-components-file-autocomplete.jsx").FileAutoComplete;

var showFileAc = function(rootElement) {
    React.render(<FileAutoComplete />, rootElement);
};

module.exports = {
    file: showFileAc,
};
