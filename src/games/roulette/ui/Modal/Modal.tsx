import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  selectModalSettingsActive,
  setModalSettingsActive,
} from "../../slice/rouletteSlice";
import { twMerge } from "tailwind-merge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { VolumeUp } from "@mui/icons-material";
import SOUNDS_ROULETTE from "../../scenes/GameScene/config";
import { sound } from "@pixi/sound";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
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
  const [valueBg, setValueBg] = useState<number>(0.08);
  const [valueEff, setValueEff] = useState<number>(1);

  const closeModal = () => {
    dispatch(setModalSettingsActive());
  };

  // изменение звука фона
  const handleChangeValueBg = (event: Event, newValue: number | number[]) => {
    setValueBg(newValue as number);
    sound.volume(SOUNDS_ROULETTE.BG, newValue as number);
  };

  const handleChangeValueEff = (event: Event, newValue: number | number[]) => {
    setValueEff(newValue as number);
    sound.volume(SOUNDS_ROULETTE.BET, newValue as number);
    sound.volume(SOUNDS_ROULETTE.SPIN, newValue as number);
    sound.volume(SOUNDS_ROULETTE.NUMBER, newValue as number);
  };

  return (
    <div
      className={twMerge(
        "absolute  z-30 w-full h-[82%]",
        modal && "block",
        !modal && "hidden"
      )}
      onClick={closeModal}
    >
      <div
        className="w-[400px] h-[500px] rounded-3xl absolute modal bg-[#a16037] border-[2px] border-[#561C08] shadow-xl shadow-[#561C08]"
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
                ) : valueBg >= 1.5 ? (
                  <VolumeUp color="primary" />
                ) : (
                  <VolumeDownIcon color="primary" />
                )}
                <Slider
                  aria-label="Volume"
                  value={valueBg}
                  color="primary"
                  max={3}
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
                ) : valueEff >= 50 ? (
                  <VolumeUp color="primary" />
                ) : (
                  <VolumeDownIcon color="primary" />
                )}
                <Slider
                  aria-label="Volume"
                  value={valueEff}
                  color="primary"
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
