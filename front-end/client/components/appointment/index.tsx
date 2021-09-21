import { Button, Flex, Grid, Input, View } from "@elements";
import { ChangeEvent, FC, SelectHTMLAttributes, useState } from "react";
import Image from "next/image";
import { useTheme } from "@emotion/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { appointmentSchema } from "client/validators/appointment";
import { IAppointment } from "client/types/appointment";
import { createAppointment } from "client/services/appointment";
import { useSnackbar } from "react-simple-snackbar";
import Select from "client/design/elements/select";
import { SERVICES } from "../../mocks/service";
import { v4 as uuid } from "uuid";

interface ICreateAppointment extends Partial<IAppointment> {}

const Appointment: FC = () => {
  const { colors } = useTheme();
  const [service, setService] = useState("");

  const [openSnackbar, _] = useSnackbar();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ICreateAppointment>();

  const onSubmit: SubmitHandler<ICreateAppointment> = async (data) => {
    try {
      const res = await createAppointment(data as any);
      openSnackbar(res.message);
    } catch (error) {
      openSnackbar("Could not send your comment, please try again later!");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex
          alignItems="center"
          backgroundColor={colors.PINK_EXTRA_LIGHT}
          my={150}
          style={{ gap: 100 }}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Flex>
            <Image
              src="/appointment/appointment-left-img.png"
              width={720}
              height={600}
              alt="form-left-img"
            />
          </Flex>
          <Flex
            width={["90vw", "90vw", "90vw", "600px"]}
            flexDirection="column"
            style={{ gap: 80 }}
          >
            <Grid
              gridColumnGap={10}
              gridRowGap={10}
              gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
              width={["90vw", "90vw", "100%", "800px"]}
            >
              <View>
                <Input
                  border="bottom"
                  placeholder="NAME"
                  {...register("name")}
                />
                {errors?.name && <p>{errors?.name?.message}</p>}
              </View>
              <View>
                <Input
                  border="bottom"
                  placeholder="EMAIL ADDRESS"
                  {...register("email")}
                />
                {errors?.email && <p>{errors?.email?.message}</p>}
              </View>
              <View>
                <Select
                  border="bottom"
                  defaultValue="SELECT SERVICE"
                  {...register("service")}
                >
                  <option hidden selected key={uuid()} disabled value="">
                    SELECT SERVICE
                  </option>
                  {SERVICES.map((item, index) => (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  ))}
                </Select>
                {errors?.service && <p>{errors?.service?.message}</p>}
              </View>
              <View>
                <Input
                  border="bottom"
                  placeholder="PHONE NUMBER"
                  {...register("phone_number")}
                />
                {errors?.phone_number && <p>{errors?.phone_number?.message}</p>}
              </View>
              <View>
                <Input
                  border="bottom"
                  placeholder="DATE"
                  type="date"
                  {...register("date")}
                />
                {errors?.date && <p>{errors?.date?.message}</p>}
              </View>
              <View>
                <Input
                  border="bottom"
                  placeholder="TIME"
                  type="time"
                  {...register("time")}
                />
                {errors?.time && <p>{errors?.time?.message}</p>}
              </View>
            </Grid>
            <Flex
              width={["90vw", "90vw", "100%", "800px"]}
              flexDirection="column"
              style={{ gap: 40 }}
            >
              <View>
                <Input
                  border="bottom"
                  placeholder="YOUR NOTES"
                  {...register("notes")}
                />
                {errors?.notes && <p>{errors.notes?.message}</p>}
              </View>
              <View>
                <Button
                  type="submit"
                  borderRadius="rounded"
                  backgroundColor="pink"
                  style={{ cursor: "pointer" }}
                >
                  Make an appointment
                </Button>
              </View>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </>
  );
};
export default Appointment;
