import BasePage from "./BasePage";

class LogoutPage extends BasePage {
    
    async logOut(){
        await this.page.locator('[id="react-burger-menu-btn"]').click();
        await this.page.locator('[id="logout_sidebar_link"]').click();
    }
}

export default LogoutPage;