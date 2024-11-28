import { Box, LinearProgress } from "@mui/material";
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 426) setScreen("mobile");
      else setScreen("desktop");
    });
  }, []);

  return (
    <Box
      bgcolor={screen == "mobile" ? "red" : "blue"}
      width={screen == "mobile" ? "100px" : "500px"}
      height="200px"
      display="flex"
      flexDirection={screen == "mobile" ? "column" : "row"}
    >
      <Box
        width="100%"
        height="100%"
        bgcolor="black"
        order={screen == "mobile" ? 2 : 1}
        display="flex"
        flexDirection="column"
      >
        <Box
          width="100%"
          order={screen == "mobile" ? 1 : 2}
          bgcolor="gray"
          display="flex"
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ height: 8, width: "100%", borderRadius: 5 }}
          />
        </Box>
        <Box width="100%" height="100%" order={screen == "mobile" ? 2 : 1}>
          {/* Project title */}
          <Box>{post.mainTitle}</Box>
        </Box>
      </Box>
      {/* Post image */}
      <Box width="100%" bgcolor="purple" order={screen == "mobile" ? 1 : 2}>
        image
      </Box>
    </Box>
  );
};

export default PostPreview;
