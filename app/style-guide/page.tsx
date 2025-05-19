"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowRight, Check, Copy, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export default function StyleGuidePage() {
  const { theme, setTheme } = useTheme()
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  // Color palettes
  const colorPalettes = [
    {
      name: "Copper",
      colors: [
        { name: "copper-50", value: "#fcf9f6" },
        { name: "copper-100", value: "#f8f1ea" },
        { name: "copper-200", value: "#f1e2d3" },
        { name: "copper-300", value: "#e6cbb0" },
        { name: "copper-400", value: "#d9ac85" },
        { name: "copper-500", value: "#cc8e5e" },
        { name: "copper-600", value: "#b07a4a" },
        { name: "copper-700", value: "#a05e3a" },
        { name: "copper-800", value: "#834d33" },
        { name: "copper-900", value: "#6c422e" },
        { name: "copper-950", value: "#3a2116" },
      ],
    },
    {
      name: "Sand",
      colors: [
        { name: "sand-50", value: "#faf8f1" },
        { name: "sand-100", value: "#f5f0e3" },
        { name: "sand-200", value: "#e9e0c7" },
        { name: "sand-300", value: "#dac9a0" },
        { name: "sand-400", value: "#c9ad77" },
        { name: "sand-500", value: "#bb9659" },
        { name: "sand-600", value: "#a97c46" },
        { name: "sand-700", value: "#8c623a" },
        { name: "sand-800", value: "#734f34" },
        { name: "sand-900", value: "#60422e" },
        { name: "sand-950", value: "#352217" },
      ],
    },
    {
      name: "Charcoal",
      colors: [
        { name: "charcoal-50", value: "#f6f7f9" },
        { name: "charcoal-100", value: "#eceef2" },
        { name: "charcoal-200", value: "#d5dae2" },
        { name: "charcoal-300", value: "#b0bac9" },
        { name: "charcoal-400", value: "#8494ab" },
        { name: "charcoal-500", value: "#657590" },
        { name: "charcoal-600", value: "#505c77" },
        { name: "charcoal-700", value: "#424b61" },
        { name: "charcoal-800", value: "#394152" },
        { name: "charcoal-900", value: "#333946" },
        { name: "charcoal-950", value: "#21242d" },
      ],
    },
    {
      name: "Slate",
      colors: [
        { name: "slate-50", value: "#f8fafc" },
        { name: "slate-100", value: "#f1f5f9" },
        { name: "slate-200", value: "#e2e8f0" },
        { name: "slate-300", value: "#cbd5e1" },
        { name: "slate-400", value: "#94a3b8" },
        { name: "slate-500", value: "#64748b" },
        { name: "slate-600", value: "#475569" },
        { name: "slate-700", value: "#334155" },
        { name: "slate-800", value: "#1e293b" },
        { name: "slate-900", value: "#0f172a" },
        { name: "slate-950", value: "#020617" },
      ],
    },
  ]

  // Typography examples
  const typographyExamples = [
    { name: "Heading 1", className: "text-4xl font-bold", text: "Elegant Tailoring" },
    { name: "Heading 2", className: "text-3xl font-bold", text: "Custom Craftsmanship" },
    { name: "Heading 3", className: "text-2xl font-bold", text: "Quality Materials" },
    { name: "Heading 4", className: "text-xl font-bold", text: "Perfect Fit" },
    {
      name: "Paragraph",
      className: "text-base",
      text: "With over 35 years of experience, we create custom garments that blend traditional Afghan craftsmanship with modern elegance.",
    },
    { name: "Small Text", className: "text-sm", text: "Each piece is meticulously handcrafted to perfection." },
    { name: "Text Gradient", className: "text-gradient text-2xl font-bold", text: "Noor Ahmad Soleimani" },
  ]

  // Button variants
  const buttonVariants = [
    { name: "Primary", className: "btn-primary", text: "Order Now" },
    { name: "Secondary", className: "btn-secondary", text: "Learn More" },
    { name: "Outline", className: "btn-outline", text: "Contact Us" },
  ]

  // Copy color to clipboard
  const copyToClipboard = (value: string, name: string) => {
    navigator.clipboard.writeText(value)
    setCopiedColor(name)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Style Guide</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive guide to the design system and components used in the Tailor Noor Ahmad website.
          </p>
        </div>

        <Tabs defaultValue="colors" className="mb-12">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="forms">Form Elements</TabsTrigger>
            <TabsTrigger value="components">Components</TabsTrigger>
          </TabsList>

          {/* Colors Tab */}
          <TabsContent value="colors">
            <Card>
              <CardHeader>
                <CardTitle>Color Palette</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex justify-end">
                    <div className="flex items-center space-x-2">
                      <Sun className="h-4 w-4" />
                      <Switch
                        checked={theme === "dark"}
                        onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                      />
                      <Moon className="h-4 w-4" />
                    </div>
                  </div>

                  {colorPalettes.map((palette) => (
                    <div key={palette.name} className="space-y-4">
                      <h3 className="text-xl font-bold">{palette.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {palette.colors.map((color) => (
                          <motion.div key={color.name} whileHover={{ y: -5 }} className="relative group">
                            <div
                              className="h-24 rounded-lg shadow-md cursor-pointer flex items-end p-3"
                              style={{ backgroundColor: color.value }}
                              onClick={() => copyToClipboard(color.value, color.name)}
                            >
                              <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-2 rounded-md text-xs w-full flex justify-between items-center">
                                <span className="font-medium">{color.name}</span>
                                <span>{color.value}</span>
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                {copiedColor === color.name ? (
                                  <div className="bg-white dark:bg-slate-900 rounded-md px-3 py-1 flex items-center">
                                    <Check className="h-4 w-4 text-green-500 mr-1" />
                                    <span className="text-sm">Copied!</span>
                                  </div>
                                ) : (
                                  <div className="bg-white dark:bg-slate-900 rounded-md px-3 py-1 flex items-center">
                                    <Copy className="h-4 w-4 mr-1" />
                                    <span className="text-sm">Copy</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography">
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Font Families</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 border rounded-lg">
                        <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Primary Font</h4>
                        <p className="text-2xl font-vazirmatn">Vazirmatn</p>
                        <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">
                          Used for body text and UI elements
                        </p>
                      </div>
                      <div className="p-6 border rounded-lg">
                        <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Display Font</h4>
                        <p className="text-2xl font-playfair">Playfair Display</p>
                        <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">
                          Used for headings and display text
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Text Styles</h3>
                    <div className="space-y-6">
                      {typographyExamples.map((example) => (
                        <div key={example.name} className="p-4 border rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                              {example.name}
                            </span>
                            <code className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                              {example.className}
                            </code>
                          </div>
                          <p className={example.className}>{example.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Buttons Tab */}
          <TabsContent value="buttons">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Button Variants</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {buttonVariants.map((button) => (
                        <div key={button.name} className="p-6 border rounded-lg">
                          <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-4">{button.name}</h4>
                          <div className="flex flex-col space-y-4">
                            <Button className={button.className}>{button.text}</Button>
                            <Button className={button.className} disabled>
                              {button.text} (Disabled)
                            </Button>
                            <Button className={`${button.className} group`}>
                              {button.text}
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Button Sizes</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button size="sm">Small</Button>
                      <Button>Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Icon Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                      <Button size="icon" variant="outline">
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button size="icon">
                        <Moon className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forms Tab */}
          <TabsContent value="forms">
            <Card>
              <CardHeader>
                <CardTitle>Form Elements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Input</h3>
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Textarea</h3>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Enter your message" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Select</h3>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom-suit">Custom Suit</SelectItem>
                            <SelectItem value="wedding-attire">Wedding Attire</SelectItem>
                            <SelectItem value="alterations">Alterations</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Checkbox</h3>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Accept terms and conditions</Label>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Radio Group</h3>
                      <RadioGroup defaultValue="suit">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="suit" id="suit" />
                          <Label htmlFor="suit">Suit</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="shirt" id="shirt" />
                          <Label htmlFor="shirt">Shirt</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="traditional" id="traditional" />
                          <Label htmlFor="traditional">Traditional</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Switch</h3>
                      <div className="flex items-center space-x-2">
                        <Switch id="notifications" />
                        <Label htmlFor="notifications">Enable notifications</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">Slider</h3>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Components Tab */}
          <TabsContent value="components">
            <Card>
              <CardHeader>
                <CardTitle>UI Components</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Cards</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Basic Card</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>This is a basic card component with header and content.</p>
                        </CardContent>
                      </Card>

                      <div className="card-luxury p-6">
                        <h3 className="text-lg font-bold mb-2">Luxury Card</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          A premium styled card with hover effects.
                        </p>
                      </div>

                      <div className="service-card bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <h3 className="text-lg font-bold mb-2">Service Card</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Card with hover lift effect.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-4">
                      <span className="tag tag-primary">Primary Tag</span>
                      <span className="tag tag-secondary">Secondary Tag</span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-copper-100 text-copper-800 dark:bg-copper-900/30 dark:text-copper-300">
                        Copper Tag
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sand-100 text-sand-800 dark:bg-sand-900/30 dark:text-sand-300">
                        Sand Tag
                      </span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Decorative Elements</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Decorative Line</h4>
                        <div className="decorative-line"></div>
                      </div>

                      <div className="relative h-40 border rounded-lg p-4">
                        <h4 className="text-sm text-slate-500 dark:text-slate-400 mb-2">Decorative Circles</h4>
                        <div className="decorative-circle w-24 h-24 top-10 left-10"></div>
                        <div className="decorative-circle w-16 h-16 bottom-5 right-10"></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Micro-interactions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="hover-lift bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <h4 className="text-lg font-bold mb-2">Hover Lift</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Hover to see the lift effect.</p>
                      </div>

                      <div className="hover-glow bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <h4 className="text-lg font-bold mb-2">Hover Glow</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Hover to see the glow effect.</p>
                      </div>

                      <div className="hover-scale bg-white dark:bg-slate-900 p-6 rounded-xl shadow-md">
                        <h4 className="text-lg font-bold mb-2">Hover Scale</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300">Hover to see the scale effect.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
