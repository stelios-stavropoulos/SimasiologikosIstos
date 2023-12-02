var checkForSamlRedirectAndSetResponse = function(dataOrJqXhr, textStatus, jqXhrOrErrorString) {
	var getDoc = function(response) {
		return new DOMParser().parseFromString(response, 'text/html');
	};
	var getForm = function(doc) {
		return doc.getElementById('TheForm');
	};
	var isSamlRedirectForm = function(doc, theForm) {
		return theForm && doc.getElementById('SAMLRequest') && doc.getElementById('RelayState');
	};
	var response = dataOrJqXhr.responseText;
	if (response) {
		var doc = getDoc(response);
		var theForm = getForm(doc);
		if (isSamlRedirectForm(doc, theForm)) {
			document.body.appendChild(theForm);
			theForm.submit();
			return;
		}
	}
	return window.yasr.setResponse(dataOrJqXhr, textStatus, jqXhrOrErrorString);
};