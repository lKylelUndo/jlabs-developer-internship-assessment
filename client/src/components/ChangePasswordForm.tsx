import type { ChangePasswordFormPropsTypes } from "../types/form.props.types";

const ChangePasswordForm = ({
  formData,
  errors,
  handleChange,
  handleChangePassword,
}: ChangePasswordFormPropsTypes) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 my-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Change Password
      </h2>
      <form className="space-y-4" onSubmit={handleChangePassword}>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          {errors.currentPassword && (
            <p className="text-red-600 text-sm mt-1">
              🚫 {errors.currentPassword}
            </p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && (
            <p className="text-red-600 text-sm mt-1">🚫 {errors.newPassword}</p>
          )}
        </div>
        <div>
          <label
            className="block text-gray-700 font-medium mb-1"
            htmlFor="confirmPassword"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" data-theme="silk" className="btn btn-neutral">
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
