import { Box, CardMedia, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const PostPreview = () => {
  const progress = Math.min((1378 / 2000) * 100, 100);

  const post = {
    mainTitle: "عنوان کامل پروژه یا محصول مورد نظر",
    mainTitleCaption:
      "زیر نویس و یک توضیح کوتاه از پروژه یا محصول در حد یک یا دو جمله.",
    titles: ["عنوان بخش 1", "عنوان بخش 2", "عنوان بخش 3"],
    titlesCaptions: [
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    ],
    mainImageUrl: "https://via.placeholder.com/300x400",
    imageUrls: [
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
      "https://via.placeholder.com/400x200",
    ],
    lastModified: "1403/8/8",
  };

  const [screen, setScreen] = useState<string>("desktop");
  const [vertical, setVertical] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.outerWidth <= 425) {
        setScreen("mobile");
        setVertical(true);
      } else {
        setScreen("desktop");
        setVertical(false);
      }
    });
  }, []);

  return (
    <Box width="100%" height="100vh" bgcolor="gray" display="flex">
      <Box
        width={vertical ? "400px" : "900px"}
        height={vertical ? "550px" : "300px"}
        display="flex"
        flexDirection={vertical ? "column" : "row"}
        borderRadius="20px"
        overflow="hidden"
        bgcolor="white"
      >
        <Box
          width={vertical ? "400px" : "500px"}
          height="300px"
          order={vertical ? 2 : 1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent={vertical ? "" : "center"}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: "10px",
              width: vertical ? "100%" : "450px",
              borderRadius: 5,
              display: "flex",
              order: vertical ? 1 : 2,
            }}
          />
          <Box
            width="90%"
            height="80%"
            alignItems="center"
            display="flex"
            flexDirection="column"
            order={vertical ? 2 : 1}
          >
            {/* Project title */}
            <Box
              width="100%"
              height="30%"
              order={vertical ? 2 : 1}
              sx={{ direction: "rtl" }}
              alignContent="center"
            >
              <Box display="flex" flexDirection="row" gap={2}>
                {/* Profile Image */}
                <Box
                  borderRadius={100}
                  width="50px"
                  height="50px"
                  bgcolor="#D9D9D9"
                />

                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography variant="body2" fontWeight="bold">
                    {post.mainTitle}
                  </Typography>
                  <Typography variant="body3">نام کاربر</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              width="100%"
              height="70%"
              order={vertical ? 2 : 1}
              sx={{ direction: "rtl" }}
            >
              <Typography variant="body3" fontWeight="bold">
                {post.mainTitleCaption}
              </Typography>
            </Box>
            {/* BookMark SVG */}
            <Box
              position="absolute"
              width="10px"
              height="10px"
              bgcolor="purple"
              left={50}
              top={vertical ? "" : 50}
              bottom={vertical ? 100 : ""}
            ></Box>
          </Box>
        </Box>
        {/* Post image */}

        <CardMedia
          component="img"
          width="400px"
          height="300px"
          image={post.mainImageUrl}
          alt={post.mainTitle}
          sx={{
            minWidth: "400px",
            order: vertical ? 1 : 2,
          }}
        />
      </Box>
    </Box>
  );
};

export default PostPreview;
