function isTouching(sprite,target){
    if(sprite.x - target.x < target.width/2 + sprite.width/2 &&
      target.x - sprite.x < target.width/2 + sprite.width/2 &&
      sprite.y - target.y < target.height/2 + sprite.height/2 &&
      target.y - sprite.y < target.height/2 + sprite.height/2){
      return true;
    }
  else{
    return false;
  }
  }
  function Bounce(sprite,target){
    if( sprite.y - target.y < target.height/2 + sprite.height/2 &&
      target.y - sprite.y < target.height/2 + sprite.height/2){
     target.velocityY = target.velocityY * (-1)
     sprite.velocityY = sprite.velocityY * (-1)
      }
    }