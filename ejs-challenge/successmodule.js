const success = ()=>{

    console.log('greater than zero');
    postList.map(post=>{
        
    const savedTopicLowered = _.lowerCase(post.title);
    const savedTopicKebabed = _.kebabCase(savedTopicLowered);
    const savedTopic = savedTopicKebabed;
    console.log(savedTopic);
  
    if(requestedTopic === savedTopic){
      res.render('post',{title: post.title, body: post.body});
    }
  
  });
    
  };

  export default success