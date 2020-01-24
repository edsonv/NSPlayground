require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app-root.xml": "./app-root.xml",
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./views/list/list-page.css": "./views/list/list-page.css",
	"./views/list/list-page.js": "./views/list/list-page.js",
	"./views/list/list-page.xml": "./views/list/list-page.xml",
	"./views/login/login-page.css": "./views/login/login-page.css",
	"./views/login/login-page.js": "./views/login/login-page.js",
	"./views/login/login-page.xml": "./views/login/login-page.xml",
	"./views/shared/config.js": "./views/shared/config.js",
	"./views/shared/utils/hint-util.js": "./views/shared/utils/hint-util.js",
	"./views/shared/utils/status-bar-util.js": "./views/shared/utils/status-bar-util.js",
	"./views/shared/view-models/grocery-list-view-model.js": "./views/shared/view-models/grocery-list-view-model.js",
	"./views/shared/view-models/user-view-model.js": "./views/shared/view-models/user-view-model.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app-root.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Frame defaultPage=\"views/login/login-page\"></Frame>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app-root.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./app-root.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));
global.registerModule("nativescript-theme-core/css/core.light.css", () => __webpack_require__("../node_modules/nativescript-theme-core/css/core.light.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]},{"type":"import","import":"\"~nativescript-theme-core/css/core.light.css\""},{"type":"rule","selectors":["ActionBar"],"declarations":[{"type":"declaration","property":"background-color","value":"black"},{"type":"declaration","property":"color","value":"white"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
        let applicationCheckPlatform = __webpack_require__("tns-core-modules/application");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("tns-core-modules/ui/frame");
__webpack_require__("tns-core-modules/ui/frame/activity");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        let applicationModule = __webpack_require__("tns-core-modules/application");
applicationModule.run({ moduleName: "app-root" });; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".add-bar"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"padding","value":"5"}]},{"type":"rule","selectors":[".add-bar Image"],"declarations":[{"type":"declaration","property":"height","value":"15"},{"type":"declaration","property":"vertical-align","value":"center"},{"type":"declaration","property":"margin-left","value":"10"},{"type":"declaration","property":"margin-right","value":"10"}]},{"type":"rule","selectors":[".add-bar TextField"],"declarations":[{"type":"declaration","property":"padding","value":"10"}]},{"type":"rule","selectors":["Label"],"declarations":[{"type":"declaration","property":"background-color","value":"white"},{"type":"declaration","property":"border-bottom-width","value":"1"},{"type":"declaration","property":"border-bottom-color","value":"gray"}]},{"type":"rule","selectors":[".delete-view"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"padding","value":"20"}]},{"type":"rule","selectors":[".delete-view Image"],"declarations":[{"type":"declaration","property":"color","value":"white"}]},{"type":"rule","selectors":["ListView"],"declarations":[{"type":"declaration","property":"opacity","value":"0"}]},{"type":"rule","selectors":[".visible"],"declarations":[{"type":"declaration","property":"animation-name","value":"show"},{"type":"declaration","property":"animation-duration","value":"1s"},{"type":"declaration","property":"animation-fill-mode","value":"forwards"}]},{"type":"keyframes","name":"show","keyframes":[{"type":"keyframe","values":["from"],"declarations":[{"type":"declaration","property":"opacity","value":"0"}]},{"type":"keyframe","values":["to"],"declarations":[{"type":"declaration","property":"opacity","value":"1"}]}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/list/list-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var observableModule = __webpack_require__("tns-core-modules/data/observable")
var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;
var page;
var GroceryListViewModel = __webpack_require__("./views/shared/view-models/grocery-list-view-model.js");
var groceryList = new GroceryListViewModel([]);
var pageData = new observableModule.fromObject({
    groceryList: groceryList,
    grocery: "",
    isLoading: false,
    listLoaded: false
});

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = pageData;

    groceryList.empty();
    pageData.set("isLoading", true);
    groceryList.load().then(function () {
        pageData.set("isLoading", false);
        pageData.set("listLoaded", true);
    });
};

exports.add = function () {
    // Check for empty submissions
    if (pageData.get("grocery").trim() === "") {
        dialogsModule.alert({
            message: "Enter a grocery item",
            okButtonText: "OK"
        });
        return;
    }

    // Dismiss the keyboard
    page.getViewById("grocery").dismissSoftInput();
    groceryList.add(pageData.get("grocery"))
        .catch(function () {
            dialogsModule.alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
        });

    // Empty the input field
    pageData.set("grocery", "");
};

exports.onSwipeCellStarted = function (args) {
    var swipeLimits = args.data.swipeLimits;
    var swipeView = args.object;
    var rightItem = swipeView.getViewById('delete-view');
    swipeLimits.right = rightItem.getMeasuredWidth();
    swipeLimits.left = 0;
    swipeLimits.threshold = rightItem.getMeasuredWidth() / 2;
};

exports.delete = function (args) {
    var item = args.view.bindingContext;
    var index = groceryList.indexOf(item);
    groceryList.delete(index);
};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/list/list-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/list/list-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("nativescript-ui-listview", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.itemTemplate", function() { return __webpack_require__("nativescript-ui-listview"); });
global.registerModule("nativescript-ui-listview/RadListView.itemSwipeTemplate", function() { return __webpack_require__("nativescript-ui-listview"); });

module.exports = "<Page loaded=\"loaded\" xmlns:lv=\"nativescript-ui-listview\">\n    <ActionBar title=\"Groceries\"></ActionBar>\n    <GridLayout rows=\"auto, *\">\n        <GridLayout row=\"0\" columns=\"*, auto\" class=\"add-bar\">\n            <TextField text=\"{{ grocery }}\" id=\"grocery\"\n                hint=\"Enter a grocery item\" col=\"0\" />\n            <Image src=\"~/images/add.png\" tap=\"add\" col=\"1\" />\n        </GridLayout>\n        <lv:RadListView items=\"{{ groceryList }}\"\n            class=\"{{ listLoaded ? 'visible' : '' }}\" row=\"1\"\n            itemSwipeProgressStarted=\"onSwipeCellStarted\" swipeActions=\"true\">\n            <lv:RadListView.itemTemplate>\n                <GridLayout class=\"grocery-list-item\">\n                    <Label class=\"p-15\" text=\"{{ name }}\" />\n                </GridLayout>\n            </lv:RadListView.itemTemplate>\n            <lv:RadListView.itemSwipeTemplate>\n                <GridLayout columns=\"*,auto\" backgroundColor=\"red\">\n                    <StackLayout id=\"delete-view\" col=\"1\" tap=\"delete\"\n                        class=\"delete-view\">\n                        <Image src=\"~/images/delete.png\" />\n                    </StackLayout>\n                </GridLayout>\n            </lv:RadListView.itemSwipeTemplate>\n        </lv:RadListView>\n        <ActivityIndicator busy=\"{{ isLoading }}\" row=\"1\"\n            horizontalAlignment=\"center\" verticalAlignment=\"center\" />\n    </GridLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/list/list-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/list/list-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".test"],"declarations":[{"type":"declaration","property":"color","value":"green"}]},{"type":"rule","selectors":["FlexboxLayout"],"declarations":[{"type":"declaration","property":"justify-content","value":"center"},{"type":"declaration","property":"align-items","value":"center"},{"type":"declaration","property":"background-size","value":"cover"},{"type":"declaration","property":"background-image","value":"url(\"~/images/background.jpg\")"}]},{"type":"rule","selectors":["StackLayout"],"declarations":[{"type":"declaration","property":"width","value":"300"},{"type":"declaration","property":"padding","value":"10 16"},{"type":"declaration","property":"background-color","value":"#f0f0f0"}]},{"type":"rule","selectors":["Image"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"20"},{"type":"declaration","property":"height","value":"70"}]},{"type":"rule","selectors":["Button","TextField"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"10"}]},{"type":"rule","selectors":[".btn-primary"],"declarations":[{"type":"declaration","property":"background-color","value":"#CB1D00"},{"type":"declaration","property":"margin-left","value":"0"},{"type":"declaration","property":"margin-right","value":"0"}]},{"type":"rule","selectors":["TextField"],"declarations":[{"type":"declaration","property":"placeholder-color","value":"#C4AFB4"},{"type":"declaration","property":"color","value":"black"}]},{"type":"rule","selectors":[".dark"],"declarations":[{"type":"declaration","property":"background-color","value":"#301217"}]},{"type":"rule","selectors":[".dark TextField"],"declarations":[{"type":"declaration","property":"color","value":"#C4AFB4"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/login/login-page.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var dialogsModule = __webpack_require__("tns-core-modules/ui/dialogs");
var frameModule = __webpack_require__("tns-core-modules/ui/frame");
var UserViewModel = __webpack_require__("./views/shared/view-models/user-view-model.js");
var user = new UserViewModel({
    email: "e.vargas@msn.com",
    password: "123"
});
var page;
var email;

exports.loaded = function (args) {
    page = args.object;
    page.actionBarHidden = true;
    isLoggingIn = user.isLoggingIn;
    page.bindingContext = user;
};

exports.toggleDisplay = function () {
    isLoggingIn = !isLoggingIn;
    user.set('isLoggingIn', isLoggingIn);
};

exports.submit = function () {
    if (isLoggingIn) {
        login();
    } else {
        signUp();
    }
};

function login() {
    user.login()
        .catch(function (error) {
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.Frame.topmost().navigate("views/list/list-page");
        });
};

function signUp() {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () {
                    exports.toggleDisplay();
                });
        }).catch(function (error) {
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/login/login-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/login/login-page.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<Page loaded=\"loaded\">\n    <FlexboxLayout>\n        <StackLayout id=\"form\"\n            class=\"{{ isLoggingIn ? 'form' : 'form dark' }}\"\n            orientation=\"vertical\">\n            <Image src=\"~/images/logo.png\" />\n\n            <TextField class=\"input input-border\" id=\"email\"\n                text=\"{{ email }}\" hint=\"Email Address\" keyboardType=\"email\"\n                autocorrect=\"false\" autocapitalizationType=\"none\" />\n            <TextField class=\"input input-border\" secure=\"true\"\n                text=\"{{ password }}\" hint=\"Password\" />\n\n            <Button class=\"btn btn-primary\"\n                text=\"{{ isLoggingIn ? 'Sign in' : 'Sign up' }}\"\n                tap=\"submit\" />\n            <Button text=\"{{ isLoggingIn ? 'Sign up' : 'Back to login' }}\"\n                class=\"link\" tap=\"toggleDisplay\" />\n        </StackLayout>\n    </FlexboxLayout>\n</Page>"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/login/login-page.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/login/login-page.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/config.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {
  apiUrl: "https://baas.kinvey.com/",
  appKey: "kid_HyHoT_REf",
  appUserHeader: "Basic a2lkX0h5SG9UX1JFZjo1MTkxMDJlZWFhMzQ0MzMyODFjN2MyODM3MGQ5OTIzMQ"
};
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/config.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/config.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/hint-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/hint-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/hint-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/utils/status-bar-util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var application = __webpack_require__("tns-core-modules/application");
var platform = __webpack_require__("tns-core-modules/platform");
var utils = __webpack_require__("tns-core-modules/utils/utils");

exports.setStatusBarColors = function() {
  // Make the iOS status bar transparent with white text.
  // See https://github.com/burkeholland/nativescript-statusbar/issues/2
  // for details on the technique used.
  if (application.ios) {
    var AppDelegate = UIResponder.extend({
      applicationDidFinishLaunchingWithOptions: function() {
        UIApplication.sharedApplication.statusBarStyle = UIStatusBarStyle.LightContent;
        return true;
      }
    }, {
        name: "AppDelegate",
        protocols: [UIApplicationDelegate]
      });
    application.ios.delegate = AppDelegate;
  }

  // Make the Android status bar transparent.
  // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
  // for details on the technique used.
  if (application.android) {
    application.android.onActivityStarted = function() {
      if (application.android && platform.device.sdkVersion >= "21") {
        var View = android.view.View;
        var window = application.android.startActivity.getWindow();
        window.setStatusBarColor(0x000000);

        var decorView = window.getDecorView();
        decorView.setSystemUiVisibility(
          View.SYSTEM_UI_FLAG_LAYOUT_STABLE
          | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
          | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
          | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
      }
    }
  }
}
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/utils/status-bar-util.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/utils/status-bar-util.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/grocery-list-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("tns-core-modules/fetch");
var ObservableArray = __webpack_require__("tns-core-modules/data/observable-array").ObservableArray;

function GroceryListViewModel(items) {
  var baseUrl = config.apiUrl + "appdata/" + config.appKey + "/Groceries";
  var viewModel = new ObservableArray(items);

  viewModel.load = function () {
    return fetch(baseUrl, {
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        data.forEach(function (grocery) {
          viewModel.push({
            name: grocery.Name,
            id: grocery._id
          });
        });
      });
  };

  viewModel.empty = function () {
    while (viewModel.length) {
      viewModel.pop();
    }
  };

  viewModel.add = function (grocery) {
    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        Name: grocery
      }),
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        viewModel.push({ name: grocery, id: data._id });
      });
  };

  viewModel.delete = function (index) {
    return fetch(baseUrl + "/" + viewModel.getItem(index).id, {
      method: "DELETE",
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function () {
        viewModel.splice(index, 1);
      });
  };
  
  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Kinvey " + config.token
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = GroceryListViewModel;; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/grocery-list-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/grocery-list-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/shared/view-models/user-view-model.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var config = __webpack_require__("./views/shared/config.js");
var fetchModule = __webpack_require__("tns-core-modules/fetch");
var observableModule = __webpack_require__("tns-core-modules/data/observable");

function User(info) {
  info = info || {};

  // You can add properties to observables on creation
  var viewModel = new observableModule.fromObject({
    email: info.email || "",
    password: info.password || "",
    isLoggingIn: true
  });

  viewModel.login = function () {
    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey + "/login", {
      method: "POST",
      body: JSON.stringify({
        username: viewModel.get("email"),
        password: viewModel.get("password")
      }),
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        config.token = data._kmd.authtoken;
      });
  };

  viewModel.register = function () {
    if (!viewModel.get("email") || !viewModel.get("password")) {
      return Promise.reject(new Error("Please provide both an email address and password."));
    }

    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey, {
      method: "POST",
      body: JSON.stringify({
        username: viewModel.get("email"),
        email: viewModel.get("email"),
        password: viewModel.get("password")
      }),
      headers: getCommonHeaders()
    }).then(handleErrors);
  };

  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": config.appUserHeader
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = User;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/shared/view-models/user-view-model.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/shared/view-models/user-view-model.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "nativescript-ui-listview":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-listview");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/data/observable":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable");

/***/ }),

/***/ "tns-core-modules/data/observable-array":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/data/observable-array");

/***/ }),

/***/ "tns-core-modules/fetch":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/fetch");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/platform":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/platform");

/***/ }),

/***/ "tns-core-modules/ui/dialogs":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/dialogs");

/***/ }),

/***/ "tns-core-modules/ui/frame":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame");

/***/ }),

/***/ "tns-core-modules/ui/frame/activity":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/frame/activity");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ }),

/***/ "tns-core-modules/utils/utils":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/utils/utils");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLXJvb3QueG1sIiwid2VicGFjazovLy8uL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWwiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbCIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3V0aWxzL3N0YXR1cy1iYXItdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWwuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2FjdGl2aXR5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSjs7Ozs7Ozs7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QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQztBQUNBLElBQUksS0FBVTs7QUFFZDtBQUNBO0FBQ0EsMkJBQTJCLHdFQUF3RTtBQUNuRyxLQUFLO0FBQ0wsQzs7Ozs7Ozs7QUMxRUEscUQ7Ozs7Ozs7QUNBQSx5RDs7Ozs7OztBQ0FBLGlFOzs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7QUNBQSxtRTs7Ozs7OztBQ0FBLG1EOzs7Ozs7O0FDQUEseUQ7Ozs7Ozs7QUNBQSxzRDs7Ozs7OztBQ0FBLHdEOzs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7QUNBQSwrRDs7Ozs7OztBQ0FBLG9FOzs7Ozs7O0FDQUEseUQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuLyBzeW5jIF5cXFxcLlxcXFwvYXBwXFxcXC4oY3NzfHNjc3N8bGVzc3xzYXNzKSRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYXBwLXJvb3QueG1sXCI6IFwiLi9hcHAtcm9vdC54bWxcIixcblx0XCIuL2FwcC5jc3NcIjogXCIuL2FwcC5jc3NcIixcblx0XCIuL2FwcC5qc1wiOiBcIi4vYXBwLmpzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiLFxuXHRcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS54bWxcIjogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLnhtbFwiLFxuXHRcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5jc3NcIjogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCI6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIsXG5cdFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS54bWxcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC9jb25maWcuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIjogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9zdGF0dXMtYmFyLXV0aWwuanNcIixcblx0XCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL2dyb2NlcnktbGlzdC12aWV3LW1vZGVsLmpzXCIsXG5cdFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCI6IFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIHsgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIGlkO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPEZyYW1lIGRlZmF1bHRQYWdlPVxcXCJ2aWV3cy9sb2dpbi9sb2dpbi1wYWdlXFxcIj48L0ZyYW1lPlwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL2FwcC1yb290LnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL2FwcC1yb290LnhtbFwiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJ+bmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdGhlbWUtY29yZS9jc3MvY29yZS5saWdodC5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJncmVlblwifV19LHtcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifm5hdGl2ZXNjcmlwdC10aGVtZS1jb3JlL2Nzcy9jb3JlLmxpZ2h0LmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiQWN0aW9uQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcImJsYWNrXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJ3aGl0ZVwifV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICBsZXQgYXBwbGljYXRpb25DaGVja1BsYXRmb3JtID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG4gICAgICAgIGlmIChhcHBsaWNhdGlvbkNoZWNrUGxhdGZvcm0uYW5kcm9pZCAmJiAhZ2xvYmFsW1wiX19zbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7XG5yZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgICAgICAgcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1kZXYtd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9idW5kbGUtZW50cnktcG9pbnRzXCIpO1xuICAgICAgICBsZXQgYXBwbGljYXRpb25Nb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbmFwcGxpY2F0aW9uTW9kdWxlLnJ1bih7IG1vZHVsZU5hbWU6IFwiYXBwLXJvb3RcIiB9KTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFkZC1iYXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0NCMUQwMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI1XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFkZC1iYXIgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCIxNVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInZlcnRpY2FsLWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIxMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1yaWdodFwiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmFkZC1iYXIgVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGFiZWxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwid2hpdGVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1ib3R0b20tY29sb3JcIixcInZhbHVlXCI6XCJncmF5XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRlbGV0ZS12aWV3XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiNDQjFEMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMjBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGVsZXRlLXZpZXcgSW1hZ2VcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIndoaXRlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiTGlzdFZpZXdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJvcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi52aXNpYmxlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLW5hbWVcIixcInZhbHVlXCI6XCJzaG93XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYW5pbWF0aW9uLWR1cmF0aW9uXCIsXCJ2YWx1ZVwiOlwiMXNcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbmltYXRpb24tZmlsbC1tb2RlXCIsXCJ2YWx1ZVwiOlwiZm9yd2FyZHNcIn1dfSx7XCJ0eXBlXCI6XCJrZXlmcmFtZXNcIixcIm5hbWVcIjpcInNob3dcIixcImtleWZyYW1lc1wiOlt7XCJ0eXBlXCI6XCJrZXlmcmFtZVwiLFwidmFsdWVzXCI6W1wiZnJvbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm9wYWNpdHlcIixcInZhbHVlXCI6XCIwXCJ9XX0se1widHlwZVwiOlwia2V5ZnJhbWVcIixcInZhbHVlc1wiOltcInRvXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwib3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn1dfV19XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3ZpZXdzL2xpc3QvbGlzdC1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgb2JzZXJ2YWJsZU1vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKVxudmFyIE9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKS5PYnNlcnZhYmxlQXJyYXk7XG52YXIgcGFnZTtcbnZhciBHcm9jZXJ5TGlzdFZpZXdNb2RlbCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvdmlldy1tb2RlbHMvZ3JvY2VyeS1saXN0LXZpZXctbW9kZWxcIik7XG52YXIgZ3JvY2VyeUxpc3QgPSBuZXcgR3JvY2VyeUxpc3RWaWV3TW9kZWwoW10pO1xudmFyIHBhZ2VEYXRhID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgZ3JvY2VyeUxpc3Q6IGdyb2NlcnlMaXN0LFxuICAgIGdyb2Nlcnk6IFwiXCIsXG4gICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICBsaXN0TG9hZGVkOiBmYWxzZVxufSk7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHBhZ2VEYXRhO1xuXG4gICAgZ3JvY2VyeUxpc3QuZW1wdHkoKTtcbiAgICBwYWdlRGF0YS5zZXQoXCJpc0xvYWRpbmdcIiwgdHJ1ZSk7XG4gICAgZ3JvY2VyeUxpc3QubG9hZCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBwYWdlRGF0YS5zZXQoXCJpc0xvYWRpbmdcIiwgZmFsc2UpO1xuICAgICAgICBwYWdlRGF0YS5zZXQoXCJsaXN0TG9hZGVkXCIsIHRydWUpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hlY2sgZm9yIGVtcHR5IHN1Ym1pc3Npb25zXG4gICAgaWYgKHBhZ2VEYXRhLmdldChcImdyb2NlcnlcIikudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgICAgICAgICAgbWVzc2FnZTogXCJFbnRlciBhIGdyb2NlcnkgaXRlbVwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBEaXNtaXNzIHRoZSBrZXlib2FyZFxuICAgIHBhZ2UuZ2V0Vmlld0J5SWQoXCJncm9jZXJ5XCIpLmRpc21pc3NTb2Z0SW5wdXQoKTtcbiAgICBncm9jZXJ5TGlzdC5hZGQocGFnZURhdGEuZ2V0KFwiZ3JvY2VyeVwiKSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGRpYWxvZ3NNb2R1bGUuYWxlcnQoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBFbXB0eSB0aGUgaW5wdXQgZmllbGRcbiAgICBwYWdlRGF0YS5zZXQoXCJncm9jZXJ5XCIsIFwiXCIpO1xufTtcblxuZXhwb3J0cy5vblN3aXBlQ2VsbFN0YXJ0ZWQgPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHZhciBzd2lwZUxpbWl0cyA9IGFyZ3MuZGF0YS5zd2lwZUxpbWl0cztcbiAgICB2YXIgc3dpcGVWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIHJpZ2h0SXRlbSA9IHN3aXBlVmlldy5nZXRWaWV3QnlJZCgnZGVsZXRlLXZpZXcnKTtcbiAgICBzd2lwZUxpbWl0cy5yaWdodCA9IHJpZ2h0SXRlbS5nZXRNZWFzdXJlZFdpZHRoKCk7XG4gICAgc3dpcGVMaW1pdHMubGVmdCA9IDA7XG4gICAgc3dpcGVMaW1pdHMudGhyZXNob2xkID0gcmlnaHRJdGVtLmdldE1lYXN1cmVkV2lkdGgoKSAvIDI7XG59O1xuXG5leHBvcnRzLmRlbGV0ZSA9IGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgdmFyIGl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG4gICAgdmFyIGluZGV4ID0gZ3JvY2VyeUxpc3QuaW5kZXhPZihpdGVtKTtcbiAgICBncm9jZXJ5TGlzdC5kZWxldGUoaW5kZXgpO1xufTs7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9saXN0L2xpc3QtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJnbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIiwgZnVuY3Rpb24oKSB7IHJldHVybiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCIpOyB9KTtcbmdsb2JhbC5yZWdpc3Rlck1vZHVsZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9SYWRMaXN0Vmlld1wiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IH0pO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L1JhZExpc3RWaWV3Lml0ZW1Td2lwZVRlbXBsYXRlXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1wiKTsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcImxvYWRlZFxcXCIgeG1sbnM6bHY9XFxcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlld1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIkdyb2Nlcmllc1xcXCI+PC9BY3Rpb25CYXI+XFxuICAgIDxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG8sICpcXFwiPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93PVxcXCIwXFxcIiBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwiYWRkLWJhclxcXCI+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCB0ZXh0PVxcXCJ7eyBncm9jZXJ5IH19XFxcIiBpZD1cXFwiZ3JvY2VyeVxcXCJcXG4gICAgICAgICAgICAgICAgaGludD1cXFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cXFwiIGNvbD1cXFwiMFxcXCIgLz5cXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVxcXCJ+L2ltYWdlcy9hZGQucG5nXFxcIiB0YXA9XFxcImFkZFxcXCIgY29sPVxcXCIxXFxcIiAvPlxcbiAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgPGx2OlJhZExpc3RWaWV3IGl0ZW1zPVxcXCJ7eyBncm9jZXJ5TGlzdCB9fVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwie3sgbGlzdExvYWRlZCA/ICd2aXNpYmxlJyA6ICcnIH19XFxcIiByb3c9XFxcIjFcXFwiXFxuICAgICAgICAgICAgaXRlbVN3aXBlUHJvZ3Jlc3NTdGFydGVkPVxcXCJvblN3aXBlQ2VsbFN0YXJ0ZWRcXFwiIHN3aXBlQWN0aW9ucz1cXFwidHJ1ZVxcXCI+XFxuICAgICAgICAgICAgPGx2OlJhZExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY2xhc3M9XFxcImdyb2NlcnktbGlzdC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzcz1cXFwicC0xNVxcXCIgdGV4dD1cXFwie3sgbmFtZSB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgIDwvbHY6UmFkTGlzdFZpZXcuaXRlbVRlbXBsYXRlPlxcbiAgICAgICAgICAgIDxsdjpSYWRMaXN0Vmlldy5pdGVtU3dpcGVUZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgPEdyaWRMYXlvdXQgY29sdW1ucz1cXFwiKixhdXRvXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcInJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgaWQ9XFxcImRlbGV0ZS12aWV3XFxcIiBjb2w9XFxcIjFcXFwiIHRhcD1cXFwiZGVsZXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkZWxldGUtdmlld1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvZGVsZXRlLnBuZ1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvU3RhY2tMYXlvdXQ+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICA8L2x2OlJhZExpc3RWaWV3Lml0ZW1Td2lwZVRlbXBsYXRlPlxcbiAgICAgICAgPC9sdjpSYWRMaXN0Vmlldz5cXG4gICAgICAgIDxBY3Rpdml0eUluZGljYXRvciBidXN5PVxcXCJ7eyBpc0xvYWRpbmcgfX1cXFwiIHJvdz1cXFwiMVxcXCJcXG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIHZlcnRpY2FsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIC8+XFxuICAgIDwvR3JpZExheW91dD5cXG48L1BhZ2U+XCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UueG1sXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcIm1hcmt1cFwiLCBwYXRoOiBcIi4vdmlld3MvbGlzdC9saXN0LXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXN0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJncmVlblwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkZsZXhib3hMYXlvdXRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJqdXN0aWZ5LWNvbnRlbnRcIixcInZhbHVlXCI6XCJjZW50ZXJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJhbGlnbi1pdGVtc1wiLFwidmFsdWVcIjpcImNlbnRlclwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtc2l6ZVwiLFwidmFsdWVcIjpcImNvdmVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1pbWFnZVwiLFwidmFsdWVcIjpcInVybChcXFwifi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlN0YWNrTGF5b3V0XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIzMDBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTAgMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2YwZjBmMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIkltYWdlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNzBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJCdXR0b25cIixcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIxMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5idG4tcHJpbWFyeVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjQ0IxRDAwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWxlZnRcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXJpZ2h0XCIsXCJ2YWx1ZVwiOlwiMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIlRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBsYWNlaG9sZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI0M0QUZCNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiYmxhY2tcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMzAxMjE3XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmRhcmsgVGV4dEZpZWxkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCIjQzRBRkI0XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmNzc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgZGlhbG9nc01vZHVsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIik7XG52YXIgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbnZhciBVc2VyVmlld01vZGVsID0gcmVxdWlyZShcIi4uL3NoYXJlZC92aWV3LW1vZGVscy91c2VyLXZpZXctbW9kZWxcIik7XG52YXIgdXNlciA9IG5ldyBVc2VyVmlld01vZGVsKHtcbiAgICBlbWFpbDogXCJlLnZhcmdhc0Btc24uY29tXCIsXG4gICAgcGFzc3dvcmQ6IFwiMTIzXCJcbn0pO1xudmFyIHBhZ2U7XG52YXIgZW1haWw7XG5cbmV4cG9ydHMubG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICBwYWdlID0gYXJncy5vYmplY3Q7XG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIGlzTG9nZ2luZ0luID0gdXNlci5pc0xvZ2dpbmdJbjtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdXNlcjtcbn07XG5cbmV4cG9ydHMudG9nZ2xlRGlzcGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpc0xvZ2dpbmdJbiA9ICFpc0xvZ2dpbmdJbjtcbiAgICB1c2VyLnNldCgnaXNMb2dnaW5nSW4nLCBpc0xvZ2dpbmdJbik7XG59O1xuXG5leHBvcnRzLnN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgbG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzaWduVXAoKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBsb2dpbigpIHtcbiAgICB1c2VyLmxvZ2luKClcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgZGlhbG9nc01vZHVsZS5hbGVydCh7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIixcbiAgICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnJhbWVNb2R1bGUuRnJhbWUudG9wbW9zdCgpLm5hdmlnYXRlKFwidmlld3MvbGlzdC9saXN0LXBhZ2VcIik7XG4gICAgICAgIH0pO1xufTtcblxuZnVuY3Rpb24gc2lnblVwKCkge1xuICAgIHVzZXIucmVnaXN0ZXIoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkaWFsb2dzTW9kdWxlXG4gICAgICAgICAgICAgICAgLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIilcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGRpYWxvZ3NNb2R1bGVcbiAgICAgICAgICAgICAgICAuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIixcbiAgICAgICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3MvbG9naW4vbG9naW4tcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJcbm1vZHVsZS5leHBvcnRzID0gXCI8UGFnZSBsb2FkZWQ9XFxcImxvYWRlZFxcXCI+XFxuICAgIDxGbGV4Ym94TGF5b3V0PlxcbiAgICAgICAgPFN0YWNrTGF5b3V0IGlkPVxcXCJmb3JtXFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJ7eyBpc0xvZ2dpbmdJbiA/ICdmb3JtJyA6ICdmb3JtIGRhcmsnIH19XFxcIlxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uPVxcXCJ2ZXJ0aWNhbFxcXCI+XFxuICAgICAgICAgICAgPEltYWdlIHNyYz1cXFwifi9pbWFnZXMvbG9nby5wbmdcXFwiIC8+XFxuXFxuICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiBpZD1cXFwiZW1haWxcXFwiXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGVtYWlsIH19XFxcIiBoaW50PVxcXCJFbWFpbCBBZGRyZXNzXFxcIiBrZXlib2FyZFR5cGU9XFxcImVtYWlsXFxcIlxcbiAgICAgICAgICAgICAgICBhdXRvY29ycmVjdD1cXFwiZmFsc2VcXFwiIGF1dG9jYXBpdGFsaXphdGlvblR5cGU9XFxcIm5vbmVcXFwiIC8+XFxuICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzcz1cXFwiaW5wdXQgaW5wdXQtYm9yZGVyXFxcIiBzZWN1cmU9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IHBhc3N3b3JkIH19XFxcIiBoaW50PVxcXCJQYXNzd29yZFxcXCIgLz5cXG5cXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiXFxuICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGlzTG9nZ2luZ0luID8gJ1NpZ24gaW4nIDogJ1NpZ24gdXAnIH19XFxcIlxcbiAgICAgICAgICAgICAgICB0YXA9XFxcInN1Ym1pdFxcXCIgLz5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcInt7IGlzTG9nZ2luZ0luID8gJ1NpZ24gdXAnIDogJ0JhY2sgdG8gbG9naW4nIH19XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGlua1xcXCIgdGFwPVxcXCJ0b2dnbGVEaXNwbGF5XFxcIiAvPlxcbiAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgPC9GbGV4Ym94TGF5b3V0PlxcbjwvUGFnZT5cIjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9sb2dpbi9sb2dpbi1wYWdlLnhtbFwiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJtYXJrdXBcIiwgcGF0aDogXCIuL3ZpZXdzL2xvZ2luL2xvZ2luLXBhZ2UueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBhcGlVcmw6IFwiaHR0cHM6Ly9iYWFzLmtpbnZleS5jb20vXCIsXG4gIGFwcEtleTogXCJraWRfSHlIb1RfUkVmXCIsXG4gIGFwcFVzZXJIZWFkZXI6IFwiQmFzaWMgYTJsa1gwaDVTRzlVWDFKRlpqbzFNVGt4TURKbFpXRmhNelEwTXpNeU9ERmpOMk15T0RNM01HUTVPVEl6TVFcIlxufTtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvY29uZmlnLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL2NvbmZpZy5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCI7IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL2hpbnQtdXRpbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC91dGlscy9oaW50LXV0aWwuanNcIiB9KTtcbiAgICB9KTtcbn0gIiwidmFyIGFwcGxpY2F0aW9uID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIik7XG52YXIgcGxhdGZvcm0gPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiKTtcbnZhciB1dGlscyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3V0aWxzL3V0aWxzXCIpO1xuXG5leHBvcnRzLnNldFN0YXR1c0JhckNvbG9ycyA9IGZ1bmN0aW9uKCkge1xuICAvLyBNYWtlIHRoZSBpT1Mgc3RhdHVzIGJhciB0cmFuc3BhcmVudCB3aXRoIHdoaXRlIHRleHQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnVya2Vob2xsYW5kL25hdGl2ZXNjcmlwdC1zdGF0dXNiYXIvaXNzdWVzLzJcbiAgLy8gZm9yIGRldGFpbHMgb24gdGhlIHRlY2huaXF1ZSB1c2VkLlxuICBpZiAoYXBwbGljYXRpb24uaW9zKSB7XG4gICAgdmFyIEFwcERlbGVnYXRlID0gVUlSZXNwb25kZXIuZXh0ZW5kKHtcbiAgICAgIGFwcGxpY2F0aW9uRGlkRmluaXNoTGF1bmNoaW5nV2l0aE9wdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uLnN0YXR1c0JhclN0eWxlID0gVUlTdGF0dXNCYXJTdHlsZS5MaWdodENvbnRlbnQ7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJBcHBEZWxlZ2F0ZVwiLFxuICAgICAgICBwcm90b2NvbHM6IFtVSUFwcGxpY2F0aW9uRGVsZWdhdGVdXG4gICAgICB9KTtcbiAgICBhcHBsaWNhdGlvbi5pb3MuZGVsZWdhdGUgPSBBcHBEZWxlZ2F0ZTtcbiAgfVxuXG4gIC8vIE1ha2UgdGhlIEFuZHJvaWQgc3RhdHVzIGJhciB0cmFuc3BhcmVudC5cbiAgLy8gU2VlIGh0dHA6Ly9icmFkbWFydGluLm5ldC8yMDE2LzAzLzEwL2Z1bGxzY3JlZW4tYW5kLW5hdmlnYXRpb24tYmFyLWNvbG9yLWluLWEtbmF0aXZlc2NyaXB0LWFuZHJvaWQtYXBwL1xuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5hbmRyb2lkKSB7XG4gICAgYXBwbGljYXRpb24uYW5kcm9pZC5vbkFjdGl2aXR5U3RhcnRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQgJiYgcGxhdGZvcm0uZGV2aWNlLnNka1ZlcnNpb24gPj0gXCIyMVwiKSB7XG4gICAgICAgIHZhciBWaWV3ID0gYW5kcm9pZC52aWV3LlZpZXc7XG4gICAgICAgIHZhciB3aW5kb3cgPSBhcHBsaWNhdGlvbi5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XG4gICAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcigweDAwMDAwMCk7XG5cbiAgICAgICAgdmFyIGRlY29yVmlldyA9IHdpbmRvdy5nZXREZWNvclZpZXcoKTtcbiAgICAgICAgZGVjb3JWaWV3LnNldFN5c3RlbVVpVmlzaWJpbGl0eShcbiAgICAgICAgICBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9TVEFCTEVcbiAgICAgICAgICB8IFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX0hJREVfTkFWSUdBVElPTlxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTlxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19JTU1FUlNJVkVfU1RJQ0tZKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvdXRpbHMvc3RhdHVzLWJhci11dGlsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3V0aWxzL3N0YXR1cy1iYXItdXRpbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9jb25maWdcIik7XG52YXIgZmV0Y2hNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiKTtcbnZhciBPYnNlcnZhYmxlQXJyYXkgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIikuT2JzZXJ2YWJsZUFycmF5O1xuXG5mdW5jdGlvbiBHcm9jZXJ5TGlzdFZpZXdNb2RlbChpdGVtcykge1xuICB2YXIgYmFzZVVybCA9IGNvbmZpZy5hcGlVcmwgKyBcImFwcGRhdGEvXCIgKyBjb25maWcuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XG4gIHZhciB2aWV3TW9kZWwgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KGl0ZW1zKTtcblxuICB2aWV3TW9kZWwubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmV0Y2goYmFzZVVybCwge1xuICAgICAgaGVhZGVyczogZ2V0Q29tbW9uSGVhZGVycygpXG4gICAgfSlcbiAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSkudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKGdyb2NlcnkpIHtcbiAgICAgICAgICB2aWV3TW9kZWwucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBncm9jZXJ5Lk5hbWUsXG4gICAgICAgICAgICBpZDogZ3JvY2VyeS5faWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICB2aWV3TW9kZWwuZW1wdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2hpbGUgKHZpZXdNb2RlbC5sZW5ndGgpIHtcbiAgICAgIHZpZXdNb2RlbC5wb3AoKTtcbiAgICB9XG4gIH07XG5cbiAgdmlld01vZGVsLmFkZCA9IGZ1bmN0aW9uIChncm9jZXJ5KSB7XG4gICAgcmV0dXJuIGZldGNoKGJhc2VVcmwsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIE5hbWU6IGdyb2NlcnlcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczogZ2V0Q29tbW9uSGVhZGVycygpXG4gICAgfSlcbiAgICAgIC50aGVuKGhhbmRsZUVycm9ycylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZpZXdNb2RlbC5wdXNoKHsgbmFtZTogZ3JvY2VyeSwgaWQ6IGRhdGEuX2lkIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmlld01vZGVsLmRlbGV0ZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHJldHVybiBmZXRjaChiYXNlVXJsICsgXCIvXCIgKyB2aWV3TW9kZWwuZ2V0SXRlbShpbmRleCkuaWQsIHtcbiAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVFcnJvcnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZpZXdNb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfSk7XG4gIH07XG4gIFxuICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5mdW5jdGlvbiBnZXRDb21tb25IZWFkZXJzKCkge1xuICByZXR1cm4ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQXV0aG9yaXphdGlvblwiOiBcIktpbnZleSBcIiArIGNvbmZpZy50b2tlblxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gR3JvY2VyeUxpc3RWaWV3TW9kZWw7OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL3ZpZXdzL3NoYXJlZC92aWV3LW1vZGVscy9ncm9jZXJ5LWxpc3Qtdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJ2YXIgY29uZmlnID0gcmVxdWlyZShcIi4uLy4uL3NoYXJlZC9jb25maWdcIik7XG52YXIgZmV0Y2hNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiKTtcbnZhciBvYnNlcnZhYmxlTW9kdWxlID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCIpO1xuXG5mdW5jdGlvbiBVc2VyKGluZm8pIHtcbiAgaW5mbyA9IGluZm8gfHwge307XG5cbiAgLy8gWW91IGNhbiBhZGQgcHJvcGVydGllcyB0byBvYnNlcnZhYmxlcyBvbiBjcmVhdGlvblxuICB2YXIgdmlld01vZGVsID0gbmV3IG9ic2VydmFibGVNb2R1bGUuZnJvbU9iamVjdCh7XG4gICAgZW1haWw6IGluZm8uZW1haWwgfHwgXCJcIixcbiAgICBwYXNzd29yZDogaW5mby5wYXNzd29yZCB8fCBcIlwiLFxuICAgIGlzTG9nZ2luZ0luOiB0cnVlXG4gIH0pO1xuXG4gIHZpZXdNb2RlbC5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmV0Y2hNb2R1bGUuZmV0Y2goY29uZmlnLmFwaVVybCArIFwidXNlci9cIiArIGNvbmZpZy5hcHBLZXkgKyBcIi9sb2dpblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdmlld01vZGVsLmdldChcImVtYWlsXCIpLFxuICAgICAgICBwYXNzd29yZDogdmlld01vZGVsLmdldChcInBhc3N3b3JkXCIpXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICAgIH0pXG4gICAgICAudGhlbihoYW5kbGVFcnJvcnMpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25maWcudG9rZW4gPSBkYXRhLl9rbWQuYXV0aHRva2VuO1xuICAgICAgfSk7XG4gIH07XG5cbiAgdmlld01vZGVsLnJlZ2lzdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdmlld01vZGVsLmdldChcImVtYWlsXCIpIHx8ICF2aWV3TW9kZWwuZ2V0KFwicGFzc3dvcmRcIikpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZldGNoTW9kdWxlLmZldGNoKGNvbmZpZy5hcGlVcmwgKyBcInVzZXIvXCIgKyBjb25maWcuYXBwS2V5LCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdmlld01vZGVsLmdldChcImVtYWlsXCIpLFxuICAgICAgICBlbWFpbDogdmlld01vZGVsLmdldChcImVtYWlsXCIpLFxuICAgICAgICBwYXNzd29yZDogdmlld01vZGVsLmdldChcInBhc3N3b3JkXCIpXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IGdldENvbW1vbkhlYWRlcnMoKVxuICAgIH0pLnRoZW4oaGFuZGxlRXJyb3JzKTtcbiAgfTtcblxuICByZXR1cm4gdmlld01vZGVsO1xufVxuXG5mdW5jdGlvbiBnZXRDb21tb25IZWFkZXJzKCkge1xuICByZXR1cm4ge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQXV0aG9yaXphdGlvblwiOiBjb25maWcuYXBwVXNlckhlYWRlclxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9ycyhyZXNwb25zZSkge1xuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgfVxuICByZXR1cm4gcmVzcG9uc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVXNlcjtcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9zaGFyZWQvdmlldy1tb2RlbHMvdXNlci12aWV3LW1vZGVsLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vdmlld3Mvc2hhcmVkL3ZpZXctbW9kZWxzL3VzZXItdmlldy1tb2RlbC5qc1wiIH0pO1xuICAgIH0pO1xufSAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2J1bmRsZS1lbnRyeS1wb2ludHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZS9hY3Rpdml0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9