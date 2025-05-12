"use client";

import React, { useState } from "react";
import { CityIcon, LocationDotIcon, StateIcon, UserIcon } from "@/icons";
import { NAME_INVALID_ERROR_MESSAGE, NAME_REGEX } from "@/lib/utils";
import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { UPDATE_BILLING_ADDRESS_ROUTE } from "@/lib/constants";
import { useUserCookie } from "@/hooks/use-cookies";
import { useBillingAddress } from "@/hooks/use-billing-address";
import { useDispatch } from "react-redux";
import { setBillingAddress } from "@/store/app.slice";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { useNotifications } from "@toolpad/core/useNotifications";

const BillingAddressModal = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const notify = useNotifications();
  const { user } = useUserCookie();
  const [isLoading, setLoading] = useState(false);
  const { billingAddress } = useBillingAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm({
    defaultValues: {
      name: (billingAddress && billingAddress.name) || "",
      address: (billingAddress && billingAddress.address) || "",
      city: (billingAddress && billingAddress.city) || "",
      state: (billingAddress && billingAddress.state) || "",
      postal_code: (billingAddress && billingAddress.postal_code) || "",
    },
  });

  const submit = async (values) => {
    try {
      clearErrors();
      setLoading(true);
      const res = await axios
        .post(UPDATE_BILLING_ADDRESS_ROUTE, values, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${user.access_token}`,
          },
        })
        .then((res) => res.data);
      if (res.status) {
        dispatch(setBillingAddress(res.user.billing_address));
        notify.show(res.message, {
          severity: "success",
          autoHideDuration: 3000,
        });
        reset();
        setOpen(false);
      } else {
        notify.show(res.message, {
          severity: "error",
          autoHideDuration: 3000,
        });
        setError("root", { type: "manual", message: res.message });
      }
    } catch (error) {
      const errorMessage =
        error instanceof AxiosError
          ? error.response
            ? error.response.data.message
            : error.message
          : "Filed to change email";
      notify.show(errorMessage, {
        severity: "error",
        autoHideDuration: 3000,
      });
      setError("root", { type: "manual", message: errorMessage });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="p-6"
      fullWidth
      maxWidth="xs"
    >
      <DialogTitle className="flex flex-col gap-1 text-2xl font-semibold">
        {billingAddress ? "Update" : "Add"} Billing Address
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-y-6">
          {errors.root && <Alert severity="error">{errors.root.message}</Alert>}

          <TextField
            variant="standard"
            label="Name"
            placeholder="Enter your name"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Image
                    src="/Log-icon/name.svg"
                    alt="Email Icon"
                    width={20}
                    height={15}
                  />
                </InputAdornment>
              ),
            }}
            error={errors.name ? true : false}
            helperText={errors.name ? errors.name.message : ""}
            {...register("name", {
              required: { value: true, message: "Enter your name" },
              pattern: {
                value: NAME_REGEX,
                message: NAME_INVALID_ERROR_MESSAGE,
              },
              minLength: {
                value: 3,
                message: "Username must be at least 3 chars",
              },
            })}
          />

          <TextField
            variant="standard"
            label="Address"
            placeholder="Enter your address"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationDotIcon className="text-default-500 pointer-events-none" />
                </InputAdornment>
              ),
            }}
            error={errors.address ? true : false}
            helperText={errors.address ? errors.address.message : ""}
            {...register("address", {
              required: { value: true, message: "Enter your address" },
              minLength: {
                value: 10,
                message: "Address must be at least 10 chars",
              },
            })}
          />

          <TextField
            variant="standard"
            label="City"
            placeholder="Enter your city"
            fullWidth
            margin="dense"
            type="text"
            color="success"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CityIcon className="w-5 text-default-500 pointer-events-none" />
                </InputAdornment>
              ),
            }}
            error={errors.city ? true : false}
            helperText={errors.city ? errors.city.message : ""}
            {...register("city", {
              required: { value: true, message: "Enter your city" },
              minLength: {
                value: 2,
                message: "city must be at least 2 chars",
              },
            })}
          />

          <div className="flex items-start gap-4">
            <TextField
              variant="standard"
              label="State"
              placeholder="State"
              fullWidth
              margin="dense"
              type="text"
              color="success"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <StateIcon className="w-5 text-default-500 pointer-events-none" />
                  </InputAdornment>
                ),
              }}
              error={errors.state ? true : false}
              helperText={errors.state ? errors.state.message : ""}
              {...register("state", {
                required: { value: true, message: "Enter your state" },
                minLength: {
                  value: 2,
                  message: "state must be at least 2 chars",
                },
              })}
            />
            <TextField
              variant="standard"
              label="Postal Code"
              placeholder="Postal Code"
              fullWidth
              margin="dense"
              type="text"
              color="success"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <LocationDotIcon className="text-default-500 pointer-events-none" />
                  </InputAdornment>
                ),
              }}
              error={errors.postal_code ? true : false}
              helperText={errors.postal_code ? errors.postal_code.message : ""}
              {...register("postal_code", {
                required: {
                  value: true,
                  message: "Enter your postal code",
                },
              })}
            />
          </div>
          <DialogActions>
            <Button
              loading={isLoading}
              loadingPosition="end"
              fullWidth
              type="submit"
              size="large"
              color="success"
              variant="contained"
            >
              Submit
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BillingAddressModal;
