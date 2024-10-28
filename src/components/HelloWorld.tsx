import { Box, Stack, Typography } from "@mui/material";
import SecondaryButton from "./buttons/SecondaryButton";
import PrimaryButton from "./buttons/PrimaryButton";
import MoonIcon from "../assets/Moon.svg?react";

const HelloWorld = () => {
  return (
    <Box width="100%" paddingX={7.5}>
      <div dir="rtl">
        <Box padding={1.5} color="text.tertiary">
          <Typography variant="h5" color="text.primary" marginBottom={1}>
            عنوان بخش
          </Typography>
          <Typography variant="body1" textAlign="justify" marginBottom={1}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </Typography>
        </Box>
        <Box
          margin={1.5}
          padding={2}
          bgcolor="bg.primaryBrand"
          borderRadius={1.5}
          border={1}
          borderColor="border.sBrand"
        >
          <Typography
            variant="body1"
            textAlign="justify"
            color="text.secondary"
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.
          </Typography>
        </Box>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PrimaryButton text="دکمه اصلی" />
          <PrimaryButton text="ایکن راست" rightIcon={MoonIcon} />
          <PrimaryButton text="ایکن چپ" leftIcon={MoonIcon} />
          <SecondaryButton text="دکمه ثانوی" />
          <SecondaryButton text="ایکن راست" rightIcon={MoonIcon} />
          <SecondaryButton text="ایکن چپ" leftIcon={MoonIcon} />
        </Stack>
      </div>
    </Box>
  );
};

export default HelloWorld;
