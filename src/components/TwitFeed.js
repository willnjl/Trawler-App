import React from "react";
import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

export default function TwitFeed() {
  return (
    <>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="TrawlerAlert"
        options={{ height: 400 }}
      />
      <TwitterFollowButton screenName={"TrawlerAlert"} />
    </>
  );
}
