// Related Posts
$(document).ready(function(){function relatedPost(g,e,r){$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+r,type:"get",dataType:"jsonp",success:function(t){for(var u="",h='<div class="related">',x=0;x<t.feed.entry.length;x++){for(var z=0;z<t.feed.entry[x].link.length;z++){if("alternate"==t.feed.entry[x].link[z].rel){u=t.feed.entry[x].link[z].href;break}}
var p=t.feed.entry[x].title.$t;var c=t.feed.entry[x].content.$t;var y=$('<div>').html(c);if(c.indexOf("https://www.youtube.com/embed/")>-1||c.indexOf("https://www.youtube.com/embed/")>-1){var d=t.feed.entry[x].media$thumbnail.url,m=d.replace('/default.jpg','/mqdefault.jpg'),k=m;}else if(c.indexOf("<img")>-1){var s=y.find('img:first').attr('src'),v=s.replace('s72-c','s600');var k=v;}else{var k='https://2.bp.blogspot.com/-4lZ7DCckjkg/WtaPclghMGI/AAAAAAAAN00/4Cais5iSDRwwUyU6jEc7qlCojlg1izsVgCLcBGAs/s1600/noImage.png';}
h+='<li><div class="related-thumb"><a class="related-img lazyload" href="'+u+'" style="background:url('+k+') no-repeat center center;background-size: cover"/></div><h3 class="related-title"><a href="'+u+'">'+p+'</a></h3></li>'} h+='</div>',g.html(h);}})};$("#related-posts").each(function(){var g=$(this),e=g.text(),r=6;relatedPost(g,e,r);});});

// Recent Posts
$.ajax({
  url: '/feeds/posts/summary',
  type: 'get',
  dataType: 'jsonp',
  data: {
    'max-results': '2',
    alt: 'json-in-script'
  },
  success: function(data) {
    for (var i = 0; i < data.feed.entry.length; i++) {
      for (var j = 0; j < data.feed.entry[i].link.length; j++) {
        if (data.feed.entry[i].link[j].rel == 'alternate') {
          var postUrl = data.feed.entry[i].link[j].href;
          break;
        }
      }
      var w = ' thag ';
      var x = ', ';
      var t = data.feed.entry[i].published.$t;
      var postPublished = t.substring(8, 10) + w + t.substring(5, 7) + x + t.substring(0, 4);
      var postImagesrc = data.feed.entry[i].author[0].gd$image.src;
      var postUri = data.feed.entry[i].author[0].uri.$t
      var postTitle = data.feed.entry[i].title.$t;
      var postThumbnail;
	  var arlina_thumbs_wid = 300; 
	  var arlina_thumbs_hei = 190;
      try {
        postThumbnail = data.feed.entry[i].media$thumbnail.url.replace('s72-c', 's1600');
      } catch (error) {
        postThumbnail = 'https://4.bp.blogspot.com/-00O66C-eBQs/W0IcokXSnOI/AAAAAAAAL_k/g4KtDm7SkQsoe7_G0vZ_C_nU0Gf_-kyVQCLcBGAs/s1600/safe_image.png';
      }
      var postAuthor = data.feed.entry[i].author[0].name.$t;
      var postSnippet = data.feed.entry[i].summary.$t;
      document.getElementById("recent-posts").innerHTML += '<div class="gallerytem"><a href=' + postUrl + ' title="' + postTitle + '"><img src=' + postThumbnail + ' alt="' + postTitle + '" width="'+arlina_thumbs_wid+'" height="'+arlina_thumbs_hei+'"/><span class="ptitle">' + postTitle + '</span></a></div>';
    }
  }
});
