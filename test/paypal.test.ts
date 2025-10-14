import { generateAccessToken, paypal } from "../lib/paypal";

// Test to generate access token from paypal

test("generates token from paypal", async () => {
  const tokenRes = await generateAccessToken();
  console.log(tokenRes);
  expect(typeof tokenRes).toBe("string");
  expect(tokenRes.length).toBeGreaterThan(0);
});

// Test to create a paypal order
test("creates a paypal order", async () => {
  const token = await generateAccessToken();
  const price = 10.0;

  const orderRes = await paypal.createOrder(price);
  console.log(orderRes);
  expect(orderRes).toHaveProperty("id");
  expect(orderRes).toHaveProperty("status");
  expect(orderRes.status).toBe("CREATED");
});

// Test to capture payment with mock order
test("simulates capturing payment order", async () => {
  const orderId = "100";
  const mockCapturePayment = jest
    .spyOn(paypal, "capturePayment")
    .mockResolvedValue({
      status: "COMPLETED",
    });

  const captureRes = await paypal.capturePayment(orderId);
  expect(captureRes).toHaveProperty("status", "COMPLETED");

  mockCapturePayment.mockRestore();
});
