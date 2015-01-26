window.discourseGallery = (function($, discourse){
    'use strict';

    function init(galleryContainerId){
        var container = $('#' + galleryContainerId);
        var template = $(container.children()[0]).clone();
        var forum_url = 'http://discourse.p2pu.org';
        container.children().remove();

        discourse.getTopic(forum_url, 156, function(topic){
            topic.post_stream.stream.forEach(function(post_id){
                discourse.getPost(forum_url, post_id, function(post){
                    console.log(post_id);
                    var clone = template.clone();
                    clone.find('.title').text('Template title');
                    clone.find('.author').text(post.name);
                    clone.find('.post-link').attr('href', forum_url + '/t/' + post.topic_id + '/' + post.post_number);
                    clone.find('.post-image').attr('src', forum_url + post.avatar_template.replace('{size}', '45'));
                    container.append(clone);
                });
            });
        });
    }

    init('gallery');

})(jQuery, window.discourse);
