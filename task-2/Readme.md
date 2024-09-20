1. **App**
   - Contains: `Sidebar`, `Header`, `MainContent`

2. **Sidebar**
   - Contains:
     - `UserInfo`
       - Profile Picture
       - Name
       - Email
     - Navigation Links
       - Dashboard
       - Schedule
       - Note
       - Products
       - Report
       - Settings
       - Support
     - Records
       - Team
       - Clients

3. **Header**
   - Contains:
     - Welcome Message (User's Name)
     - Date Display
     - Search Bar
     - Notifications and Profile Icon

4. **MainContent**
   - Contains: `Board`

5. **Board**
   - Contains: Multiple `Column` components

6. **Column**
   - Contains: Multiple `TaskCard` components
   - Props: `title`

7. **TaskCard**
   - Contains:
     - Tags
     - Task Title
     - Progress Bar
     - Task Details (Note, Progress, Comments, Attachments)
   - Props: `task` (object containing task details)

8. **TaskModal**
   - Contains:
     - Form Fields (Task Title, Description, Tags, Progress, Comments, Attachments)
   - Props: `isOpen`, `onClose`, `onSave`
