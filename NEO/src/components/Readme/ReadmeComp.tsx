import * as React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  Avatar,
  useMediaQuery,
  useTheme,
  Divider,
  Slide,
} from "@mui/material";
import { SlideProps } from "@mui/material/Slide"; // Importing SlideProps
import { motion } from "framer-motion";
import { BsExclamation } from "react-icons/bs";
import profilePic from "./profilePic2.1.png";
import Footer from "./Footer";

// Fixed Transition Component with children typing
const Transition = React.forwardRef(function Transition(
  props: React.PropsWithChildren<SlideProps>, // Pass children along with SlideProps
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ReadmeComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [hasSeenReadme, setHasSeenReadme] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      const hasSeen = localStorage.getItem("hasSeenReadme");
      if (!hasSeen) {
        setOpen(true);
      }
    }, 3000);
  }, []);

  const handleOpen = () => {
    setHasSeenReadme(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHasSeenReadme(true);
    localStorage.setItem("hasSeenReadme", "true");
  };

  return (
    <>
      {!hasSeenReadme && (
        <Dialog
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          open={open}
          PaperProps={{
            sx: {
              borderRadius: "1rem",
              maxHeight: "70vh",
            },
          }}
        >
          <DialogTitle disableTypography>
            <div className="flex flex-row justify-between items-center h-16">
              <Typography variant="h6">
                <span className="text-gray-800 hover:text-blue-500 hover:underline-offset-4 underline text-base md:text-lg hover:decoration-2 decoration-1 transition duration-500">
                  <a href="https://github.com/MMansy19/NEO-Challenge">
                    𝐀𝐩𝐩 𝐑𝐞𝐚𝐝𝐦𝐞
                  </a>
                </span>
              </Typography>

              <IconButton>
                <a
                  href="https://github.com/MMansy19"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Avatar
                    alt="Mahmoud Mansy"
                    src={profilePic}
                    sx={{
                      width: isMobile ? "60px" : "70px",
                      height: "auto",
                      border: "2px solid #3B82F6",
                    }}
                  />
                </a>
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.2rem" }}
              >
                ⚡ 𝐈'𝐦 𝐚 𝐏𝐚𝐬𝐬𝐢𝐨𝐧𝐚𝐭𝐞 𝐅𝐫𝐨𝐧𝐭𝐞𝐧𝐝 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐰𝐢𝐭𝐡{" "}
                <span className=" hover:text-blue-500 hover:underline-offset-4 underline text-base md:text-lg hover:decoration-2 decoration-1 transition duration-500">
                  <a href="https://mahmoud-mansy-portfolio.netlify.app">
                    𝟒𝟎+ 𝐩𝐫𝐨𝐣𝐞𝐜𝐭𝐬
                  </a>
                </span>
                .
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                textAlign="center"
                mx={isMobile ? 0 : 2}
                paragraph
                className="text-gray-800"
                style={{ fontSize: isMobile ? ".9rem" : "1.2rem" }}
              >
                𝐓𝐡𝐢𝐬 𝐍𝐄𝐎 𝐃𝐚𝐭𝐚 𝐕𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐀𝐩𝐩 𝐢𝐬 𝐛𝐮𝐢𝐥𝐭 𝐰𝐢𝐭𝐡 𝐑𝐞𝐚𝐜𝐭, 𝐕𝐢𝐭𝐞,
                𝐓𝐲𝐩𝐞𝐒𝐜𝐫𝐢𝐩𝐭, 𝐓𝐚𝐢𝐥𝐰𝐢𝐧𝐝 𝐂𝐒𝐒, 𝐚𝐧𝐝 𝐆𝐨𝐨𝐠𝐥𝐞 𝐂𝐡𝐚𝐫𝐭𝐬. 𝐈𝐭 𝐩𝐫𝐨𝐯𝐢𝐝𝐞𝐬
                𝐫𝐞𝐚𝐥-𝐭𝐢𝐦𝐞 𝐝𝐚𝐭𝐚 𝐯𝐢𝐬𝐮𝐚𝐥𝐢𝐳𝐚𝐭𝐢𝐨𝐧 𝐟𝐨𝐫 𝐍𝐞𝐚𝐫-𝐄𝐚𝐫𝐭𝐡 𝐎𝐛𝐣𝐞𝐜𝐭𝐬 (𝐍𝐄𝐎𝐬) 𝐮𝐬𝐢𝐧𝐠{" "}
                <span className=" hover:text-blue-500 hover:underline-offset-4 underline text-base md:text-lg hover:decoration-2 decoration-1 transition duration-500">
                  <a href="https://api.nasa.gov/">𝐍𝐀𝐒𝐀'𝐬 𝐍𝐞𝐨𝐖𝐬 𝐀𝐏𝐈</a>
                </span>
                .
              </Typography>
              <Divider />
              <Typography
                paragraph
                className="text-gray-800 font-bold"
                style={{
                  fontSize: isMobile ? "1rem" : "1.25rem",
                  marginTop: "1rem",
                }}
              >
                Key Features:
              </Typography>
              <ul className="flex flex-col gap-2   ml-3 md:ml-6 mb-4 text-sm md:text-base text-gray-800 list-none">
                <li>✅ 𝑹𝒆𝒂𝒍-𝒕𝒊𝒎𝒆 𝒅𝒂𝒕𝒂 𝒗𝒊𝒔𝒖𝒂𝒍𝒊𝒛𝒂𝒕𝒊𝒐𝒏 𝒘𝒊𝒕𝒉 𝑵𝑨𝑺𝑨’𝒔 𝑵𝒆𝒐𝑾𝒔 𝑨𝑷𝑰.</li>
                <li>✅ 𝑰𝒏𝒕𝒆𝒓𝒂𝒄𝒕𝒊𝒗𝒆 𝑩𝒂𝒓 𝑪𝒉𝒂𝒓𝒕 𝒂𝒏𝒅 𝑻𝒂𝒃𝒍𝒆 𝒗𝒊𝒆𝒘𝒔.</li>
                <li>
                  ✅ 𝑺𝒆𝒂𝒓𝒄𝒉 𝒂𝒏𝒅 𝒇𝒊𝒍𝒕𝒆𝒓 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏𝒂𝒍𝒊𝒕𝒊𝒆𝒔 𝒇𝒐𝒓 𝒆𝒂𝒔𝒚 𝒆𝒙𝒑𝒍𝒐𝒓𝒂𝒕𝒊𝒐𝒏.
                </li>
                <li>✅ 𝑬𝒙𝒑𝒐𝒓𝒕 𝒅𝒂𝒕𝒂 𝒂𝒔 𝑪𝑺𝑽 𝒇𝒐𝒓 𝒐𝒇𝒇𝒍𝒊𝒏𝒆 𝒖𝒔𝒆.</li>
                <li>✅ 𝑹𝒆𝒔𝒑𝒐𝒏𝒔𝒊𝒗𝒆 𝒅𝒆𝒔𝒊𝒈𝒏 𝒇𝒐𝒓 𝒎𝒐𝒃𝒊𝒍𝒆 𝒂𝒏𝒅 𝒅𝒆𝒔𝒌𝒕𝒐𝒑 𝒗𝒊𝒆𝒘𝒔. </li>
              </ul>
              <Footer />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}

      <button
        className="text-2xl md:text-4xl underline hover:underline-offset-4 decoration-2 hover:decoration-4 hover:text-blue-500  font-bold text-center mb-6 text-gray-800 transition duration-500"
        onClick={handleOpen}
      >
        NEO Data Visualization
      </button>
    </>
  );
};

export default ReadmeComponent;
