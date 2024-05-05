import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { twMerge } from "tailwind-merge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { VolumeUp } from "@mui/icons-material";
import { sound } from "@pixi/sound";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import SOUNDS_SLOTS from "../../scene/GameScene/config";
import { selectModalSettingsActive, setModalSettingsActive } from "../../slices/slotSlice";
// стили ползунка звука MUI
const theme = createTheme({
  palette: {
    primary: {
      main: "#481d08",
    },
  },
});

interface ModalProps {}

// eslint-disable-next-line no-empty-pattern
const Modal: FC<ModalProps> = ({}) => {
  const modal = useAppSelector(selectModalSettingsActive);
  const dispatch = useAppDispatch();
  const [valueBg, setValueBg] = useState<number>(0.03);
  const [valueEff, setValueEff] = useState<number>(1);

  const closeModal = () => {
    dispatch(setModalSettingsActive());
  };

  // изменение звука фона
  const handleChangeValueBg = (event: Event, newValue: number | number[]) => {
    setValueBg(newValue as number);
    sound.volume(SOUNDS_SLOTS.BG, newValue as number);
  };

  const handleChangeValueEff = (event: Event, newValue: number | number[]) => {
    setValueEff(newValue as number);
    sound.volume(SOUNDS_SLOTS.BET, newValue as number);
    sound.volume(SOUNDS_SLOTS.SPIN, newValue as number);
    sound.volume(SOUNDS_SLOTS.WIN, newValue as number);
    sound.volume(SOUNDS_SLOTS.LOSE, newValue as number);
  };

  return (
    <div
      className={twMerge(
        "absolute  z-30 w-full h-full outline",
        modal && "block",
        !modal && "hidden"
      )}
      onClick={closeModal}
    >
      <div
        className="w-[400px] h-[500px] rounded-3xl passion-one-regular absolute modal bg-[#a16037] border-[2px] border-[#561C08] shadow-xl shadow-[#561C08]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-center mt-3 font-normal text-[45px] text-[#481d08]">
          Settings
        </h2>
        <div className="flex justify-center flex-wrap gap-9 items-center mt-16">
          <ThemeProvider theme={theme}>
            <Box>
              <h2 className="text-[25px] text-[#481d08]">Background Sound</h2>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                {valueBg === 0 ? (
                  <VolumeOffIcon color="primary" />
                ) : valueBg >= 0.2 ? (
                  <VolumeUp color="primary" />
                ) : (
                  <VolumeDownIcon color="primary" />
                )}
                <Slider
                  aria-label="Volume"
                  value={valueBg}
                  color="primary"
                  max={0.5}
                  min={0}
                  step={0.01}
                  sx={{ width: 300 }}
                  onChange={handleChangeValueBg}
                />
              </Stack>
            </Box>

            <Box>
              <h2 className="text-[25px] text-[#481d08]">Sound Effects</h2>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                {valueEff === 0 ? (
                  <VolumeOffIcon color="primary" />
                ) : valueEff >= 1 ? (
                  <VolumeUp color="primary" />
                ) : (
                  <VolumeDownIcon color="primary" />
                )}
                <Slider
                  aria-label="Volume"
                  value={valueEff}
                  color="primary"
                  max={2}
                  min={0}
                  step={0.01}
                  sx={{ width: 300 }}
                  onChange={handleChangeValueEff}
                />
              </Stack>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Modal;
