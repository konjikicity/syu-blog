import Container from "./container";
import { Typography, IconButton } from "../components/style";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className="flex justify-center gap-4">
          <a href="https://twitter.com/konjikicity" target="_blank">
            <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
              <i className="fab fa-twitter text-lg" />
            </IconButton>
          </a>
          <a href="https://github.com/konjikicity" target="_blank">
            <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
              <i className="fab fa-github text-lg" />
            </IconButton>
          </a>
        </div>
        <Typography className="text-[#DDE6ED] text-center py-12">
          @2023 syu-blog . All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
