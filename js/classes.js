class UserPost{

    constructor(id, author, createTime, text, media, likes){
        this.id=id;
        this.author = author;
        this.createTime=createTime;
        this.text=text
        this.media=media;
        this.likes=likes+"k";
    }

    isPostWithMedia() {
        if (this.media==null) {
            return false;
        } else {
            return true;
        }
    }

    postContent(){
        let header= '<div class="post">' +
        '<div class="post-author">' +
          '<span class="post-author-info">'+
            '<img src="'+ this.author.avatar + 'alt="Post author">'+
            '<small>'+this.author.firstname + ' ' + this.author.lastname +'</small>'+
          '</span>'+
          '<small>'+ this.createTime+'</small>'+
        '</div>';

       let postBody= "";
       if(this.isPostWithMedia){
           postBody='<div class="post-image">'+
           '<img src="' + this.media.url + '" alt="">'+
         '</div>'+
         '<div class="post-title">'+
          '<h3>'+this.text+'</h3>'+
         '</div>'+
         '<div class="post-actions">'+
           '<button type="button" name="like" class="like-button">'+this.likes+'</button>'+
         '</div>'+
       '</div>';
       }else{
        postBody='<div class="post-title">'+
        '<h3>'+this.text+'</h3>'+
      '</div>'+
      '<div class="post-actions">'+
      '<button type="button" name="like" class="like-button">'+this.likes+'</button>'+
      '</div>'+
    '</div>';
       }

       return header+postBody;
       
       
    }





}

class Author{
    constructor(firstname,lastname,avatar){
        this.firstname=firstname;
        this.lastname=lastname;
        this.avatar=avatar;
    }
}

class media{
    constructor(type,url){
    this.type=type;
    this.url=url;
    }
}