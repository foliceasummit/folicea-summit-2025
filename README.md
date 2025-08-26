# FOLICEA Summit 2025 - Official Website

The official website for the Federation of Liberian Communities in East Africa (FOLICEA) Summit 2025, taking place in Kampala, Uganda from November 28 to December 1, 2025.

## 🌟 Features

- **Modern, Responsive Design** - Beautiful UI with Liberian colors (red, white, blue)
- **Registration System** - Comprehensive registration form with file upload
- **Email Notifications** - Automatic confirmation emails to registrants and organizers
- **Contact Form** - Easy communication with the organizing committee
- **Countdown Timer** - Real-time countdown to the summit
- **Mobile-Friendly** - Optimized for all devices
- **Admin Panel** - Protected admin area for organizers (coming soon)

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB Atlas
- **Email**: Nodemailer with Gmail SMTP
- **File Upload**: React Dropzone
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB Atlas account
- Gmail account (for email sending)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd folicea-summit-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   MONGODB_URI=your-mongodb-connection-string
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-gmail-app-password
   NEXTAUTH_SECRET=your-secret-key
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your-secure-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

To enable email functionality:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Use the app password** in your `.env.local` file

## 🗄️ Database Setup

1. **Create a MongoDB Atlas account** at [mongodb.com](https://mongodb.com)
2. **Create a new cluster**
3. **Get your connection string** and add it to `.env.local`
4. **The database and collections will be created automatically**

## 📱 Pages & Features

### Homepage (`/`)
- Hero section with countdown timer
- Featured speakers
- Why attend section
- Gallery of Uganda
- Partners & sponsors

### Registration (`/registration`)
- Comprehensive registration form
- File upload for profile photos
- Form validation
- Success confirmation

### About (`/about`)
- FOLICEA mission and vision
- Core values
- Summit objectives
- Why Uganda section

### Speakers (`/speakers`)
- Featured speakers with photos
- Speaker categories
- Speaker bios and topics

### Agenda (`/agenda`)
- 4-day detailed schedule
- Event types and descriptions
- Venue information

### Contact (`/contact`)
- Contact form
- Venue details
- Contact information

## 🔧 API Routes

- `/api/register` - Handles registration form submissions
- `/api/contact` - Handles contact form submissions
- `/api/admin/*` - Admin panel routes (coming soon)

## 🎨 Customization

### Colors
The website uses Liberian flag colors:
- Red: `#BF0A30`
- Blue: `#002868`
- White: `#FFFFFF`

### Styling
- Tailwind CSS classes
- Custom components in `components/` directory
- Global styles in `styles/globals.css`

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔒 Security

- Form validation on both client and server
- Environment variables for sensitive data
- Protected admin routes (coming soon)
- File upload restrictions

## 📞 Support

For technical support or questions:
- Email: foliceasummit@gmail.com
- Phone: +231 0776038583 / +231 0888533208

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for the FOLICEA Summit 2025. All rights reserved.

## 🙏 Acknowledgments

- FOLICEA organizing committee
- Liberian diaspora community
- Kampala Serena Hotel
- All speakers and participants

---

**FOLICEA Summit 2025** - Building bridges, strengthening bonds, creating lasting impact.
