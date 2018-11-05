var process={
    env:{
        NODE_ENV:"development"
    }
};

requirejs.config({
    "baseUrl": "./dist/Scripts/Modules",
    "paths": {
        "css": '../../../../css',
        "react": "../../../../node_modules/react/umd/react.development",
        "react-dom": "../../../../node_modules/react-dom/umd/react-dom.development",
        "react-bootstrap": "../../../../node_modules/react-bootstrap/dist/react-bootstrap",
        "react-router-dom": "../../../../node_modules/react-router-dom/umd/react-router-dom",
        "react-router-redux": "../../../../node_modules/react-router-redux/dist/ReactRouterRedux",
        "redux": "../../../../node_modules/redux/dist/redux",
        "react-redux": "../../../../node_modules/react-redux/dist/react-redux",
        "redux-thunk": "../../../../node_modules/redux-thunk/dist/redux-thunk",
        "redux-form": "../../../../node_modules/redux-form/dist/redux-form"
    }
});

define(['Entrance'], function(Entrance){

    Entrance.Run('container');
});