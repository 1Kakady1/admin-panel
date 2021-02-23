export const setCookie = (cookie_name:string, cookie_val:any, expires_hours:number) => {

    if (typeof expires_hours === "undefined") {
        expires_hours = -1;
    }

    let expires;
    let path;

    path = "; path=/";
    if (expires_hours !== -1) {
        let d = new Date();
        d.setTime(d.getTime() + expires_hours * 60 * 60 * 1000);
        expires = "; expires=" + d.toUTCString();
    } else {
        expires = ";";
    }
    document.cookie = cookie_name + "=" + cookie_val + path + expires;
};

export const getCookie = (name:string) => {
    let matches = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)") // eslint-disable-line
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const deleteCookie = (name:string)=> {
    setCookie(name, "", -1)
}
