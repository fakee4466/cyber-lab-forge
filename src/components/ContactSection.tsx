import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'service_id', // Replace with your service ID
        'template_id', // Replace with your template ID
        {
          from_name: formData.fullName,
          from_email: formData.email,
          organization: formData.organization,
          message: formData.message,
          to_email: 'dockerlabs@example.com' // Replace with your email
        },
        'user_id' // Replace with your user ID
      );

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon about bringing DockerLabs to your institution.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        organization: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.fullName && formData.email && formData.organization && formData.message;

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Contact for <span className="text-primary">Collaboration</span>
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in delay-200">
              Want to bring DockerLabs to your institution?<br />
              Fill the form below to get in touch.
            </p>
          </div>

          <div className="bg-card border border-glow/20 rounded-2xl p-8 shadow-glow hover:shadow-glow-intense transition-all duration-300 animate-slide-up delay-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-card-foreground font-semibold">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-glow/30 focus:border-primary focus:ring-primary text-foreground"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-card-foreground font-semibold">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-glow/30 focus:border-primary focus:ring-primary text-foreground"
                  placeholder="Enter your email address"
                />
              </div>

              {/* College/Organization */}
              <div className="space-y-2">
                <Label htmlFor="organization" className="text-card-foreground font-semibold">
                  College/Organization *
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  required
                  className="bg-input border-glow/30 focus:border-primary focus:ring-primary text-foreground"
                  placeholder="Enter your institution name"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-card-foreground font-semibold">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-input border-glow/30 focus:border-primary focus:ring-primary text-foreground resize-none"
                  placeholder="Tell us about your requirements and how we can help..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full bg-primary text-primary-foreground py-3 text-lg font-semibold rounded-xl shadow-glow hover:shadow-glow-intense disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-foreground border-t-transparent mr-3"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-3" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;