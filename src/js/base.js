export default {
   encode( string, express = 60 ) {
      const key = Math.round(Math.random() * 0xff)
      return [key.toString(16), string.split("").map(item => {
         let charCode = item.charCodeAt(0) + key
         
         if ( charCode > 0xff ) {
            return String.fromCharCode(charCode - ~~(charCode / 0xff)) + "." + ~~(charCode / 0xff)
         } else {
            return String.fromCharCode(charCode)
         }
         
      }).join(""), (~~(Date.now() / 1e3) + express).toString(16)].join("@")
   },
   decode( string ) {
      let [ key, payload, express ] = string.split("@")
      
      key = parseInt( key, 16 )
      express = parseInt( express, 16 )
      
      if ( express < Date.now() / 1e3 ) {
         throw new Error("myBase: timeout!")
      }
      
      return payload.match(/\S(?:\.\d)?/g).map(item => {
         let charCode
         if ( item.indexOf(".") > -1 ) {
            charCode = item.split(".")[0].charCodeAt(0) + item.split(".")[1] * 0xff - key
         } else {
            charCode = item.charCodeAt(0) - key
         }
         
         return String.fromCharCode(charCode)
      }).join("")
   }
}


