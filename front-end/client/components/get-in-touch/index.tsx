import { Button, Flex, Heading, Input, Text, View } from "@elements";
import { FC } from "react";
import Image from "next/image";
import LeftItem from "./components/left-items";
import Textarea from "client/design/elements/textarea";
import { useForm, SubmitHandler } from "react-hook-form";
import { IContact } from "client/types/contact";
import { contactSchema } from "client/validators/contact";
import { yupResolver } from "@hookform/resolvers/yup";
import { createContact } from "client/services/contact";
import { useSnackbar } from "react-simple-snackbar";
import { useTheme } from "@emotion/react";

interface ICreateContact extends Partial<IContact> {}

const GetInTouch: FC = () => {
  const [openSnackbar, _] = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateContact>({
    resolver: yupResolver(contactSchema) as any,
  });

  const { colors } = useTheme();

  const onSubmit: SubmitHandler<ICreateContact> = async (data) => {
    try {
      const res = await createContact(data as any);
      openSnackbar(res.message);
    } catch (error) {
      openSnackbar("Could not send your comment, please try again later!");
    }
  };

  return (
    <>
      <Flex flexDirection="column" alignItems="center">
        <Heading as="h1">Get In Touch</Heading>
        <View textAlign="center">
          <Text>
            To doesn&apos;t his appear replenish together called he of mad place
            won&apos;t wherein blessed second every <br />
            wherein were meat kind wherein and martcin
          </Text>
        </View>

        <Flex
          my={55}
          flexDirection={["column", "column", "column", "row"]}
          style={{ gap: 100 }}
        >
          <Flex flexDirection="column" style={{ gap: 20 }}>
            <LeftItem
              url="/get-in-touch/location.png"
              sndField="NEW YORK, USa"
              fstField="848 E 28th ST, BROOKLYN"
            />
            <LeftItem
              url="/get-in-touch/location.png"
              sndField="NEW YORK, USa"
              fstField="848 E 28th ST, BROOKLYN"
            />
            <LeftItem
              url="/get-in-touch/location.png"
              sndField="NEW YORK, USa"
              fstField="848 E 28th ST, BROOKLYN"
            />
          </Flex>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex
              flexDirection="column"
              width={["90vw", "90vw", "90vw", "600px"]}
              style={{ gap: 15 }}
            >
              <View>
                <Input placeholder="FIRST NAME" {...register("first_name")} />
                {errors.first_name && <p>{errors.first_name?.message}</p>}
              </View>
              <View>
                <Input placeholder="EMAIL ADDRESS" {...register("email")} />
                {errors.email && <p>{errors.email?.message}</p>}
              </View>
              <View>
                <Textarea
                  placeholder="WRITE COMMENT"
                  {...register("comment")}
                />
                {errors.comment && <p>{errors.comment?.message}</p>}
              </View>
              <View>
                <Button
                  style={{ cursor: "pointer" }}
                  type="submit"
                  backgroundColor="pink"
                >
                  SUBMIT NOW
                </Button>
              </View>
            </Flex>
          </form>
        </Flex>
      </Flex>
    </>
  );
};
export default GetInTouch;
