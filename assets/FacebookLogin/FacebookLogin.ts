/* global FB */
import { _decorator, Component, Node, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("FacebookLogin")
export class FacebookLogin extends Component {
	loginWithFB() {
		FB.login(function (response) {
			if (response.authResponse) {
				console.log("Welcome!  Fetching your information.... ");
				FB.api("/me", function (response) {
					if(window.confirm("Tiếp tục với " + response.name)) {
						console.log(response.name, ' đăng nhập facebook thành công!!!');
						director.loadScene("SceneGame");
					} else {
						FB.logout(function(response) {
							console.log('Đăng xuất facebook!!!');
						});
					}
				});
			} else {
				console.log("User cancelled login or did not fully authorize.");
			}
		});
	}
}
