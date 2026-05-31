import { Link } from "react-router-dom";
import { IoLogoTwitter } from "react-icons/io";

const TwitterLink = () => {
  return (
    <div className="flex justify-center items-center border-[#666] border-y py-5">
      <Link
        to={
          "https://x.com/intent/tweet?original_referer=https%3A%2F%2Fwww.lcu.edu.ng%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Fascon%202022&url=https%3A%2F%2Fwww.lcu.edu.ng%2Findex.php%2Fconference-proceedings%2Ffacon-2022&via=lcu_ibdan"
        }
        target="_blank"
      >
        <IoLogoTwitter size={24} />
      </Link>
    </div>
  );
};

export default TwitterLink;
