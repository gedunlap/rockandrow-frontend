import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <div class="container">
        <iframe class="responsive-iframe" src="https://www.youtube.com/embed/ZN0J6qKCIrI">
        </iframe>
    </div>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;