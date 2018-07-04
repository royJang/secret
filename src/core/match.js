module.exports = {
    /***
     *         @important! 尝试匹配 `username@anyemail.com` 匹配出所有email
     *         @important! 尝试匹配 填写的地区信息, 比如hangzhou / 杭州
     *         @important! 尝试匹配 telphone:xxxx, telphone：xxxxx, phone=xxxx, phone===xxxx, phone===xxxxxx
     */

    match (){

    },


    /**
     * match for mail
     * try match QQ mail
     */
    
    match_for_mail ( text ){
        return text.match(/\w+@\w+\.\w+/ig);
    },

    /**
     * return qq or null
     */
    match_for_qq_mail ( text ){
        if( /@qq\.\w+$/.test( text ) ){
            return text.replace(/[^\d]/g, '');
        } else {
            return null;
        }
    },

    /**
     * 手机号码匹配
     */
    match_for_phone ( text ){

    },

    /**
     * match for qq
     * match qq:xxxxxx, qq：xxxxxx, qq=xxxxx, qq==xxxxx, qq===xxxxxxx ....
     */
    match_for_qq ( text ){
        const qqs = text.match( /qq[^a-zA-Z0-9]{1,3}(\d{5,})/ig );
        if( qqs && qqs.length > 0 ){
            return qqs.map( qq => {
                return qq.replace(/[^\d]/g, '');
            });
        } else {
            return [];
        }
    }
};