import React, { useState } from "react";
import { FcLike } from "react-icons/fc";

function SoicalDetal({ el, like }) {
  const [thisTrue, setThisTrue] = useState(true);

  let [likePostCount, setLikePostCount] = useState(el.count);

  return (
    <div className="block_social-images  relative">
      <div className="w-96">
        <img src={el.img} alt="" />
      </div>
      <div className="block_social-likes flex gap-4 absolute bottom-2 items-center">
        {thisTrue ? (
          <img
            width={30}
            onClick={() => (
              setLikePostCount((likePostCount += 1)), setThisTrue(false)
            )}
            src={like}
            alt=""
          />
        ) : (
          <FcLike
            fontSize={30}
            onClick={() => (
              setThisTrue(true), setLikePostCount((likePostCount -= 1))
            )}
          />
        )}
        <p>{likePostCount}</p>
      </div>
    </div>
  );
}

export default SoicalDetal;
