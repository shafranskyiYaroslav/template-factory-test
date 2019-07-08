(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),s=(n(14),n(1)),l=n(2),c=n(4),u=n(3),m=n(5),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={publicMembers:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;fetch(this.props.outsideCollaborators).then(function(e){return e.json()}).then(function(t){return e.setState({publicMembers:t})})}},{key:"render",value:function(){return r.a.createElement("div",{id:"outside-collaborators",className:"info"},r.a.createElement("h3",null,"Outside collaborators"),this.state.publicMembers.map(function(e){return r.a.createElement("div",{className:"member-info",key:Math.random()},r.a.createElement("img",{src:e.avatar_url,alt:e.login}),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.entries(e).map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{style:{color:"blue"}},e[0]),r.a.createElement("td",null,e[1]))}))))}))}}]),t}(r.a.Component),f=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={members:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){var e=this;fetch(this.props.memberUrl).then(function(e){return e.json()}).then(function(t){return e.setState({members:t})})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"org-info",className:"info"},r.a.createElement("h3",null,"About organization"),r.a.createElement("img",{src:this.props.avatar,alt:"org-logo"}),r.a.createElement("table",null,r.a.createElement("tbody",null,this.props.organizationInfo.map(function(e){return r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{key:Math.random(),style:{color:"blue"}},e[0]),r.a.createElement("td",{key:Math.random()},e[1]))})))),r.a.createElement("div",{id:"members",className:"info"},r.a.createElement("h3",null,"List of members"),this.state.members.map(function(e){return r.a.createElement("div",{className:"member-info",key:Math.random()},r.a.createElement("img",{src:e.avatar_url,alt:e.login}),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.entries(e).map(function(e){return r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{key:Math.random(),style:{color:"blue"}},e[0]),r.a.createElement("td",{key:Math.random()},e[1]))}))))})),r.a.createElement(h,{outsideCollaborators:this.props.organizationInfo.filter(function(e){return"public_members_url"===e[0]}).map(function(e){return e[1].slice(0,-9)})}))}}]),t}(r.a.Component),d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).searchClick=function(e){e.target=e.target.closest("li");var t=e.target.textContent;n.setState({organizationInfo:Object.entries(n.props.organizationsList.filter(function(e){return e.login===t})[0])})},n.state={organizationInfo:[]},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"organization-div",style:this.props.style},r.a.createElement("ul",{id:"organization-list"},r.a.createElement("h3",null,"Search results"),this.props.organizationsNamesList.map(function(t,n){return r.a.createElement("li",{key:n,onClick:e.searchClick},t)})),r.a.createElement(f,{organizationInfo:this.state.organizationInfo,avatar:this.state.organizationInfo.filter(function(e){return"avatar_url"===e[0]}).map(function(e){return e[1]}),memberUrl:this.state.organizationInfo.filter(function(e){return"members_url"===e[0]}).map(function(e){return e[1].slice(0,-9)})}))}}]),t}(r.a.Component),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).call(this))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"user-info",style:this.props.style,className:"info"},r.a.createElement("h3",null,"About user"),r.a.createElement("img",{src:this.props.avatar,alt:this.props.userInfo.login}),r.a.createElement("table",null,r.a.createElement("tbody",null,Object.entries(this.props.userInfo).map(function(e){return r.a.createElement("tr",{key:Math.random()},r.a.createElement("td",{style:{color:"blue"},key:Math.random()},e[0]),r.a.createElement("td",{key:Math.random()},e[1]))})))))}}]),t}(r.a.Component),p=(n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).searchChange=function(t){e.setState({organization:t.target.value})},e.searchSubmit=function(t){t.preventDefault(),e.setState(function(t){return{isUserHidden:!0,isOrganizationHidden:!1,organizationsNamesList:t.organizationsList.filter(function(t){return-1!==t.login.indexOf(e.state.organization.toLowerCase())}).map(function(e){return e.login})}})},e.userChange=function(t){e.setState({user:t.target.value})},e.userSubmit=function(t){t.preventDefault(),e.setState(function(e){return{isUserHidden:!1,isOrganizationHidden:!0,userInfo:e.usersData.filter(function(t){return t.login===e.user})[0]}})},e.state={organization:"",organizationsList:[],organizationsNamesList:[],user:"",userInfo:[],usersData:[],isUserHidden:!0,isOrganizationHidden:!0},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/organizations").then(function(e){return e.json()}).then(function(t){e.setState({organizationsList:t})}).catch(function(e){return new Error(e)}),fetch("https://api.github.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({usersData:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("form",{id:"search-form",onSubmit:this.searchSubmit},r.a.createElement("input",{id:"organization-search",name:"organization",value:this.state.organization,placeholder:"Input the  name of organization",onChange:this.searchChange})),r.a.createElement("form",{id:"user-form",onSubmit:this.userSubmit},r.a.createElement("input",{id:"user-search",name:"user",value:this.state.user,placeholder:"Input the username",onChange:this.userChange}))),r.a.createElement(b,{style:this.state.isUserHidden?{display:"none"}:{display:"flex"},avatar:this.state.userInfo.avatar_url,userInfo:this.state.userInfo}),r.a.createElement(d,{style:this.state.isOrganizationHidden?{display:"none"}:{display:"flex"},organizationsNamesList:this.state.organizationsNamesList,organizationsList:this.state.organizationsList}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.a125fc2e.chunk.js.map