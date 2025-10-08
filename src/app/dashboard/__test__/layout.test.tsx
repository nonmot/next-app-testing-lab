import { render, screen } from "@testing-library/react";
import DashboardLayout from "../layout";

describe("RootLayout", () => {
  it("ヘッダーと children を表示する", () => {
    render(
      <DashboardLayout>
        <p>これはテスト用の中身です</p>
      </DashboardLayout>
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();

    expect(screen.getByText("これはテスト用の中身です")).toBeInTheDocument();
  })
})
