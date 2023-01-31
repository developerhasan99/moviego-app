import heartIcon from "../assets/heart.svg";
import moreIcon from "../assets/more-horizontal.svg";
import barIcon from "../assets/bar-chart.svg";
import infoIcon from "../assets/info.svg";
import helpIcon from "../assets/help-circle.svg";

export default function Header() {
  return (
    <header>
      <div className="logo_wrapper">
        <a href="/">MovieGo!</a>
        <button>
          <img src={heartIcon} alt="Support" aria-label="Support" />
        </button>
        <button>
          <img src={moreIcon} alt="More Games" aria-label="More Games" />
        </button>
      </div>
      <div className="right_icons_wrapper">
        <button>
          <img src={barIcon} alt="Stats" aria-label="Stats" />
        </button>
        <button>
          <img src={infoIcon} alt="About" aria-label="About" />
        </button>
        <button>
          <img src={helpIcon} alt="Help" aria-label="Help" />
        </button>
      </div>
    </header>
  );
}
