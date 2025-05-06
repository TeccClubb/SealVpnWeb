import { GET_BILLING_ADDRESS_ROUTE } from "@/lib/constants";
import { setBillingAddress } from "@/store/app.slice";
import { useNotifications } from "@toolpad/core/useNotifications";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUserCookie } from "./use-cookies";

export const useBillingAddress = (token) => {
  const dispatch = useDispatch();
  const notify = useNotifications();
  const { user } = useUserCookie();
  

  const [billingAddress, setBillingAddress] = useState(true);
  const [isBillingAddressLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingAddress = async () => {
      try {
        if (isBillingAddressLoadedOnce) return;
        const response = await axios
          .get(GET_BILLING_ADDRESS_ROUTE, {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token ? token : user.access_token}`,
            },
          })
          .then((res) => res.data);
        if (response.status) {
          dispatch(setBillingAddress(response.user.billing_address));
        }
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError
            ? error.response
              ? error.response.data.message
              : error.message
            : "Failed to Billing Address Load";
        notify.show(errorMessage, {
          severity: "error",
          autoHideDuration: 3000,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBillingAddress();
  }, []);

  return { isBillingAddressLoading, billingAddress };
};
