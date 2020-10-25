
$(function() {
    //Json query
    $.get( "https://private-anon-0b33c2519a-wad20postit.apiary-mock.com/profiles", function( data ) {
        $( ".result" ).html( data );
        $.each(data, function( index, value ) {

            let profile = new UserProfile(new Author(value.firstname,value.lastname,value.avatar));

            $(".profile-container").append(profile.ProfileContent());

        });
        $('.follow-button').on('click',function(){
            if(this.innerHTML === "Follow")
                this.innerHTML = "Followed"
            else
                this.innerHTML = "Follow"
            $(this).toggleClass("followed");
        });

    });
    loadUserInfo()
        .then(function (response) {
            user = new User(
                response.firstname,
                response.lastname,
                response.email,
                response.avatar
            );
            $('.dropdown-menu').prepend(user.userInfo())
            $('.avatar').attr('src', user.avatar);
        })
        .catch(function () {
            alert('Error loading user information')
        });

    $('.avatar').click(function(){
        if($('.dropdown-menu').is(":hidden")){
            $('.dropdown-menu').show();
        }
        else{
            $('.dropdown-menu').hide();
        }
    })
})

function loadUserInfo() {
    return $.get(
        {
            url: 'https://private-anon-ba0e9b1a8c-wad20postit.apiary-mock.com/users/1',
            success: function (response) {
                return response;
            },
            error: function () {
                alert('Error loading user information')
            }
        }
    );
}

