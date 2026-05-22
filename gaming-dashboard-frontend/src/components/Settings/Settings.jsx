import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settings__header">
        <h1>Settings ⚙️</h1>
        <p>Manage your account and preferences</p>
      </div>

      <section className="settings__card">
        <h3>Account</h3>

        <div className="field">
          <label>Username</label>
          <input placeholder="AlexJohnson" />
        </div>

        <div className="field">
          <label>Email</label>
          <input placeholder="alex@email.com" />
        </div>

        <button className="save-btn">Save Changes</button>
      </section>

      <section className="settings__card">
        <h3>Preferences</h3>

        <div className="toggle-row">
          <span>Dark Mode</span>
          <input type="checkbox" />
        </div>

        <div className="toggle-row">
          <span>Show Online Status</span>
          <input type="checkbox" />
        </div>

        <div className="toggle-row">
          <span>Enable Notifications</span>
          <input type="checkbox" />
        </div>
      </section>

      <section className="settings__card">
        <h3>Security</h3>

        <button className="danger-btn">Change Password</button>
        <button className="danger-btn">Logout All Devices</button>
      </section>
    </div>
  );
}

export default Settings;
