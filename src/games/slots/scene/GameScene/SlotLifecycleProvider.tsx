import { FC, ReactNode, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import {
  selectSlotLifecycle,
  setSlotLifecycle,
  SlotLifecycle,
} from "../../slices/slotSlice";

interface ISlotLifecycleProviderProps {
  children: ReactNode;
}

const SlotLifecycleProvider: FC<ISlotLifecycleProviderProps> = ({
  children,
}) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lifecycle === SlotLifecycle.PLAY) {
      const stopping = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOPPING));
      }, 3000);

      return () => clearTimeout(stopping);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOPPING) {
      const stop = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOP));
      }, 1000);

      return () => clearTimeout(stop);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOP) {
      dispatch(setSlotLifecycle(SlotLifecycle.INFO));
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.INFO) {
      setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.READY_TO_START));
      }, 2000);
    }
  }, [lifecycle, dispatch]);
  return <>{children}</>;
};

export default SlotLifecycleProvider;
