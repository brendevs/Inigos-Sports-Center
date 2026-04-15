"use client";

import { useState } from "react";

type FieldKey = "nickname" | "fullname" | "email" | "phone";
type PasswordKey = "current" | "newPw" | "confirm";
type ToastType = "success" | "error" | null;

export default function ProfilePage() {
  const [fields, setFields] = useState({
    nickname: "johndoe",
    fullname: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 000-1234",
  });

  const [editing, setEditing] = useState({
    nickname: false,
    fullname: false,
    email: false,
    phone: false,
  });

  const [tempValues, setTempValues] = useState({ ...fields });

  const [passwords, setPasswords] = useState({
    current: "",
    newPw: "",
    confirm: "",
  });

  const [showPw, setShowPw] = useState({
    current: false,
    newPw: false,
    confirm: false,
  });

  const [toast, setToast] = useState<ToastType>(null);
  const [toastMsg, setToastMsg] = useState("");

  const getInitials = (name: string): string =>
    name
      .split(" ")
      .map((w: string) => w[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const toggleEdit = (field: FieldKey): void => {
    if (editing[field]) {
      setFields((prev) => ({ ...prev, [field]: tempValues[field] }));
    } else {
      setTempValues((prev) => ({ ...prev, [field]: fields[field] }));
    }
    setEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const cancelEdit = (field: FieldKey): void => {
    setTempValues((prev) => ({ ...prev, [field]: fields[field] }));
    setEditing((prev) => ({ ...prev, [field]: false }));
  };

  const getStrength = (pw: string): number => {
    let score = 0;
    if (pw.length >= 8) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return score;
  };

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColor = [
    "",
    "bg-red-400",
    "bg-amber-400",
    "bg-emerald-400",
    "bg-emerald-600",
  ];
  const strength = getStrength(passwords.newPw);

  const showToast = (type: ToastType, msg: string): void => {
    setToast(type);
    setToastMsg(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = (): void => {
    if (passwords.newPw && passwords.newPw !== passwords.confirm) {
      showToast("error", "New passwords do not match.");
      return;
    }
    if (passwords.newPw && passwords.newPw.length < 8) {
      showToast("error", "Password must be at least 8 characters.");
      return;
    }
    const unsaved = (Object.keys(editing) as FieldKey[]).filter(
      (k) => editing[k],
    );
    if (unsaved.length > 0) {
      unsaved.forEach((k) =>
        setFields((prev) => ({ ...prev, [k]: tempValues[k] })),
      );
      setEditing({
        nickname: false,
        fullname: false,
        email: false,
        phone: false,
      });
    }
    setPasswords({ current: "", newPw: "", confirm: "" });
    showToast("success", "Profile updated successfully!");
  };

  const inputClass =
    "w-full h-10 px-3 text-sm rounded-lg border border-gray-200 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition";

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 font-[system-ui]">
      <div className="max-w-xl mx-auto space-y-4">
        {/* Header */}
        <div className="flex items-center gap-4 bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold text-xl flex-shrink-0">
            {getInitials(fields.fullname || "U")}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-base">
              {fields.fullname}
            </p>
            <p className="text-sm text-gray-500">@{fields.nickname}</p>
            <button className="text-xs text-blue-500 mt-1 hover:underline">
              Change photo
            </button>
          </div>
        </div>

        {/* Public Profile */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Public profile
          </p>

          {[
            { id: "nickname", label: "Nickname" },
            { id: "fullname", label: "Full name" },
          ].map(({ id, label }) => (
            <div key={id}>
              <label className="text-xs text-gray-500 mb-1 block">
                {label}
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  className={inputClass}
                  disabled={!editing[id as FieldKey]}
                  value={
                    editing[id as FieldKey]
                      ? tempValues[id as FieldKey]
                      : fields[id as FieldKey]
                  }
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />
                <button
                  onClick={() => toggleEdit(id as FieldKey)}
                  className={`px-3 h-10 text-xs rounded-lg border font-medium whitespace-nowrap transition ${
                    editing[id as FieldKey]
                      ? "border-blue-400 text-blue-600 hover:bg-blue-50"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {editing[id as FieldKey] ? "Save" : "Edit"}
                </button>
                {editing[id as FieldKey] && (
                  <button
                    onClick={() => cancelEdit(id as FieldKey)}
                    className="px-3 h-10 text-xs rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Contact
          </p>

          {[
            { id: "email", label: "Email address", type: "email" },
            { id: "phone", label: "Phone number", type: "tel" },
          ].map(({ id, label, type }) => (
            <div key={id}>
              <label className="text-xs text-gray-500 mb-1 block">
                {label}
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type={type}
                  className={inputClass}
                  disabled={!editing[id as FieldKey]}
                  value={
                    editing[id as FieldKey]
                      ? tempValues[id as FieldKey]
                      : fields[id as FieldKey]
                  }
                  onChange={(e) =>
                    setTempValues((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />
                <button
                  onClick={() => toggleEdit(id as FieldKey)}
                  className={`px-3 h-10 text-xs rounded-lg border font-medium whitespace-nowrap transition ${
                    editing[id as FieldKey]
                      ? "border-blue-400 text-blue-600 hover:bg-blue-50"
                      : "border-gray-200 text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {editing[id as FieldKey] ? "Save" : "Edit"}
                </button>
                {editing[id as FieldKey] && (
                  <button
                    onClick={() => cancelEdit(id as FieldKey)}
                    className="px-3 h-10 text-xs rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Change Password */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
            Change password
          </p>

          {[
            {
              id: "current",
              label: "Current password",
              placeholder: "Enter current password",
            },
            {
              id: "newPw",
              label: "New password",
              placeholder: "At least 8 characters",
            },
            {
              id: "confirm",
              label: "Confirm new password",
              placeholder: "Repeat new password",
            },
          ].map(({ id, label, placeholder }) => (
            <div key={id}>
              <label className="text-xs text-gray-500 mb-1 block">
                {label}
              </label>
              <div className="flex gap-2 items-center">
                <input
                  type={showPw[id as PasswordKey] ? "text" : "password"}
                  className={inputClass}
                  placeholder={placeholder}
                  value={passwords[id as PasswordKey]}
                  onChange={(e) =>
                    setPasswords((prev) => ({ ...prev, [id]: e.target.value }))
                  }
                />
                <button
                  onClick={() =>
                    setShowPw((prev) => ({
                      ...prev,
                      [id]: !prev[id as PasswordKey],
                    }))
                  }
                  className="px-3 h-10 text-xs rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 whitespace-nowrap transition"
                >
                  {showPw[id as PasswordKey] ? "Hide" : "Show"}
                </button>
              </div>

              {/* Strength bar for new password */}
              {id === "newPw" && passwords.newPw.length > 0 && (
                <div className="mt-2">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i <= strength
                            ? strengthColor[strength]
                            : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {strengthLabel[strength]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full h-11 bg-blue-500 hover:bg-blue-600 active:scale-[0.99] text-white text-sm font-semibold rounded-xl transition"
        >
          Save changes
        </button>

        {/* Toast */}
        {toast && (
          <div
            className={`text-sm text-center px-4 py-3 rounded-xl border font-medium transition-all ${
              toast === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                : "bg-red-50 border-red-200 text-red-600"
            }`}
          >
            {toastMsg}
          </div>
        )}
      </div>
    </div>
  );
}
