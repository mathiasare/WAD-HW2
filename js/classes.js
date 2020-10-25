class Author{
    constructor(firstname,lastname,avatar){
        this.firstname=firstname;
        this.lastname=lastname;
        this.avatar=avatar;
    }
}

class User{
    constructor(firstname,lastname,email,avatar){
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.avatar=avatar;
    }

    userInfo(){
        return "<span>" + this.firstname + " " + this.lastname
        + "<br>" + this.email + "</span><hr>";
    }
}

class media{
    constructor(type,url){
    this.type=type;
    this.url=url;
    }
}
class UserPost{

    constructor(id, author, createTime, text, media, likes){
        this.id=id;
        this.author = author;
        this.createTime=createTime;
        this.text=text;
        this.media=media;
        this.likes=likes;
    }

    isPostWithMedia() {
        if (this.media==null) {
            return false;
        } else {
            return true;
        }
    }


    postContent(){
        let txt;
        if(this.text==null){
            txt="";
        }else{
            txt="<h3>"+this.text+"</h3>";
        }
        let header= '<div class="post">' +
        '<div class="post-author">' +
          '<span class="post-author-info">'+
            '<img src="'+ this.author.avatar + '" alt="Post author">'+
            '<small>'+this.author.firstname + ' ' + this.author.lastname +'</small>'+
          '</span>'+
          '<small>'+ this.createTime+'</small>'+
        '</div>';

       let postBody= "";
       if(this.isPostWithMedia()){
           let postContent="";
           if(this.media.type==="image"){
                postContent='<img src="' + this.media.url + '" alt="">';
           }else{
               postContent='<video controls><source src="'+this.media.url+'"></video>'
           }
           postBody='<div class="post-image">'+
           postContent+
         '</div>'+
         '<div class="post-title">'+
          txt+
         '</div>'+
         '<div class="post-actions">'+
           '<button type="button" name="like" class="like-button">'+this.likes+'</button>'+
         '</div>'+
       '</div>';
       }else{
        postBody='<div class="post-title">'+
        txt+
      '</div>'+
      '<div class="post-actions">'+
      '<button type="button" name="like" class="like-button">'+this.likes+'</button>'+
      '</div>'+
    '</div>';
       }

       return header+postBody;

    }
toString(){
    return this.likes;

}
}

class UserProfile{

    constructor(author){
        this.author = author;
    }

    ProfileContent(){
        let header= '<div class="profile">' +
            '<div class="profile-author">' +
            '<span class="profile-author-info">'+
            '<img src="'+ this.author.avatar + '" alt="Profile avatar">'+
            '<small>'+this.author.firstname + ' ' + this.author.lastname +'</small>'+
            '</span>'+
            '</div>';

        let profileBody= "";
        profileBody='<div class="profile-title">'+
            '</div>'+
            '<div class="profile-actions">'+
            '<button id="follow" type="button" name="follow" class="follow-button">'+"Follow"+'</button>'+
            '</div>'+
            '</div>';

        return header+profileBody;


    }
}