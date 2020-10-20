
$(function() {
    //Json query
    $.get( "https://private-anon-05dd88cf9f-wad20postit.apiary-mock.com/posts", function( data ) {
        $( ".result" ).html( data );
        $.each(data, function( index, value ) {

            let postAuthor = new Author(value.author.firstname,value.author.lastname,value.author.avatar);
            let postMedia;
            if(value.media ==null){
                postMedia=null;
            }else{
                postMedia=new media(value.media.type,value.media.url);
            }
            
            let pst = new UserPost(value.id,postAuthor,value.createTime,value.text,postMedia,value.likes);
        
            $(".main-container").append(pst.postContent());
            
            });
            $('.like-button').on('click',function(){
                $(this).toggleClass("liked");
          });
          
        });
   
    
        
})

//<button type="button" name="like" class="like-button">25k</button>
//<button type="button" name="like" class="like-button">10k</button>