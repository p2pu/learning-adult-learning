window.discourse = (function($){
    'use strict';

    function getPost(forum_url, post_id, cb){
        var url = forum_url + '/posts/' + post_id + '.json';
        $.getJSON(url, cb);
    }

    function getTopic(forum_url, topic_id, cb){
        var url = forum_url + '/t/' + topic_id + '.json';
        $.getJSON(url, cb);
    }

    return {
        getPost: getPost,
        getTopic: getTopic
    };
})(jQuery);
