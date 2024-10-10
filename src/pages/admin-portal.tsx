import React, { useState, useRef } from 'react'
import Button from '@/components/admin/button'
import Input from '@/components/admin/input'
import Textarea from '@/components/admin/textarea'
import Card from '@/components/admin/card'
import { Tabs, Tab } from '@/components/admin/tabs'
import BarChart from '@/components/admin/bar-chart'

export default function AdminPortal() {
    const [projectTitle, setProjectTitle] = useState('')
    const [projectDescription, setProjectDescription] = useState('')
    const [projectFeatures, setProjectFeatures] = useState('')
    const [projectImage, setProjectImage] = useState<string | null>(null)
    const [clientReview, setClientReview] = useState('')
    const [revenueGrowth, setRevenueGrowth] = useState('')
    const [customerSatisfaction, setCustomerSatisfaction] = useState('')
    const [customerExpansion, setCustomerExpansion] = useState('')
    const [projectDiversification, setProjectDiversification] = useState('')

    const [blogTitle, setBlogTitle] = useState('')
    const [blogContent, setBlogContent] = useState('')

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleAddProject = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Adding project:', {
            projectTitle,
            projectDescription,
            projectFeatures,
            projectImage,
            clientReview,
            revenueGrowth: parseInt(revenueGrowth),
            customerSatisfaction: parseInt(customerSatisfaction),
            customerExpansion: parseInt(customerExpansion),
            projectDiversification: parseInt(projectDiversification)
        })
        // Reset form fields
        setProjectTitle('')
        setProjectDescription('')
        setProjectFeatures('')
        setProjectImage(null)
        setClientReview('')
        setRevenueGrowth('')
        setCustomerSatisfaction('')
        setCustomerExpansion('')
        setProjectDiversification('')
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const handleAddBlog = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Adding blog:', { blogTitle, blogContent })
        setBlogTitle('')
        setBlogContent('')
    }

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProjectImage(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const activityData = [
        { label: 'Mon', value: 40 },
        { label: 'Tue', value: 60 },
        { label: 'Wed', value: 45 },
        { label: 'Thu', value: 70 },
        { label: 'Fri', value: 55 },
        { label: 'Sat', value: 30 },
        { label: 'Sun', value: 25 },
    ]

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '28px', marginBottom: '20px', color: '#014783' }}>Admin Portal</h1>
            <Tabs>
                <Tab label="Projects">
                    <Card title="Add New Project" description="Create a new project for your portfolio.">
                        <form onSubmit={handleAddProject}>
                            <Input
                                label="Project Title"
                                value={projectTitle}
                                onChange={(e) => setProjectTitle(e.target.value)}
                            />
                            <Textarea
                                label="Project Description (max 1000 words)"
                                value={projectDescription}
                                onChange={(e) => setProjectDescription(e.target.value)}
                                maxWords={1000}
                            />
                            <Textarea
                                label="Project Features"
                                value={projectFeatures}
                                onChange={(e) => setProjectFeatures(e.target.value)}
                            />
                            <Input
                                type="file"
                                label="Project Image"
                                onChange={handleImageUpload} value={''} />
                            {projectImage && (
                                <img
                                    src={projectImage}
                                    alt="Project Preview"
                                    style={{ maxWidth: '100%', marginTop: '10px', marginBottom: '15px' }}
                                />
                            )}
                            <Textarea
                                label="Client Review"
                                value={clientReview}
                                onChange={(e) => setClientReview(e.target.value)}
                            />
                            <Input
                                label="Revenue Growth"
                                type="number"
                                value={revenueGrowth}
                                onChange={(e) => setRevenueGrowth(e.target.value)}
                            />
                            <Input
                                label="Customer Satisfaction"
                                type="number"
                                value={customerSatisfaction}
                                onChange={(e) => setCustomerSatisfaction(e.target.value)}
                            />
                            <Input
                                label="Customer Expansion"
                                type="number"
                                value={customerExpansion}
                                onChange={(e) => setCustomerExpansion(e.target.value)}
                            />
                            <Input
                                label="Project Diversification"
                                type="number"
                                value={projectDiversification}
                                onChange={(e) => setProjectDiversification(e.target.value)}
                            />
                            <Button type="submit">Add Project</Button>
                        </form>
                    </Card>
                </Tab>
                <Tab label="Blogs">
                    <Card title="Add New Blog Post" description="Create a new blog post for your website.">
                        <form onSubmit={handleAddBlog}>
                            <Input
                                label="Blog Title"
                                value={blogTitle}
                                onChange={(e) => setBlogTitle(e.target.value)}
                            />
                            <Input
                                type="file"
                                label="Project Image"
                                onChange={handleImageUpload} value={''} />
                            {projectImage && (
                                <img
                                    src={projectImage}
                                    alt="Project Preview"
                                    style={{ maxWidth: '100%', marginTop: '10px', marginBottom: '15px' }}
                                />
                            )}
                            <Textarea
                                label="Blog Content"
                                value={blogContent}
                                onChange={(e) => setBlogContent(e.target.value)}
                            />
                            <Button type="submit">Add Blog Post</Button>
                        </form>
                    </Card>
                </Tab>
                <Tab label="Activity">
                    <Card title="Activity Overview" description="Monitor your website's activity over the past week.">
                        <BarChart data={activityData} />
                    </Card>
                </Tab>
            </Tabs>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '30px' }}>
                <Card>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Total Projects</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>18</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>+2 from last month</p>
                </Card>
                <Card>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Total Blog Posts</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>13</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>+4 from last month</p>
                </Card>
                <Card>
                    <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Website Visits</h3>
                    <p style={{ fontSize: '24px', fontWeight: 'bold' }}>1,080</p>
                    <p style={{ fontSize: '14px', color: '#666' }}>+12% from last month</p>
                </Card>
            </div>
        </div>
    )
}