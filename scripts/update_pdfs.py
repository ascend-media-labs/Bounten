import os
from PIL import Image, ImageDraw, ImageFont

font_title = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 36)
font_subtitle = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 20)
font_heading = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 28)
font_body = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 18)
font_bold = ImageFont.truetype('C:\\Windows\\Fonts\\segoeuib.ttf', 18)
font_small = ImageFont.truetype('C:\\Windows\\Fonts\\segoeui.ttf', 14)

def create_brochure_page_1():
    w, h = 1240, 1754 # A4 @ 150 DPI
    img = Image.new('RGB', (w, h), (255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    # Top banner header (white background for exact logo)
    draw.rectangle([0, 0, w, 160], fill=(255, 255, 255))
    draw.line([(0, 160), (w, 160)], fill=(226, 232, 240), width=2)
    
    # Paste exact user logo
    logo = Image.open('public/logo.png').convert('RGBA')
    logo_w = 420
    logo_h = int(logo.height * (logo_w / logo.width))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (70, 35), logo_resized)
    
    # Contact info in header
    draw.text((850, 45), 'Phone: +91 9542666644', fill=(8, 28, 59), font=font_bold)
    draw.text((850, 75), 'WhatsApp: +91 9542666644', fill=(16, 185, 129), font=font_bold)
    draw.text((850, 105), 'Web: bounten.com', fill=(2, 132, 199), font=font_body)
    
    # Hero Highlight
    draw.rectangle([70, 190, w - 70, 420], fill=(240, 249, 255), outline=(186, 230, 253), width=2)
    draw.text((100, 215), 'REVOLUTIONARY ELECTROLYSIS WATER TREATMENT TECHNOLOGY', fill=(8, 28, 59), font=font_heading)
    text_desc = (
        'Bounten transforms conventional water treatment by delivering 100% salt-free, zero-maintenance\n'
        'electrolytic conditioning systems. Unlike outdated ion-exchange systems that dump corrosive salt into\n'
        'our environment and waste thousands of litres of water during backwashing, Bounten Zoftnor operates\n'
        'with zero chemicals, zero salt refills, zero water wastage, and an astonishing 15-18 year lifespan.'
    )
    draw.text((100, 270), text_desc, fill=(51, 65, 85), font=font_body)
    
    # 6 Core Advantages
    draw.text((70, 460), 'WHY CHOOSE BOUNTEN ZOFTNOR TECHNOLOGY?', fill=(8, 28, 59), font=font_heading)
    
    features = [
        ('100% Salt-Free & Chemical-Free', 'No recurring salt bag purchases, no corrosive sodium added to water.'),
        ('Zero Maintenance Architecture', 'Fit and forget installation with fully automated solid-state operation.'),
        ('Zero Water Wastage', 'No backwash regeneration cycle required; saves up to 50,000 litres yearly.'),
        ('Retains Essential Minerals', 'Alters calcium & magnesium crystallization without stripping nutrients.'),
        ('Protects High-End Appliances', 'Saves geysers, washing machines, solar heaters & pipes from scaling.'),
        ('PAN India Service Support', 'Dedicated technical team, genuine spare parts & certified AMC coverage.')
    ]
    
    y = 520
    for idx, (title, desc) in enumerate(features):
        x = 70 if idx % 2 == 0 else 650
        box_y = y + (idx // 2) * 110
        draw.rectangle([x, box_y, x + 520, box_y + 90], fill=(248, 250, 252), outline=(226, 232, 240), width=1)
        draw.ellipse([x + 15, box_y + 20, x + 35, box_y + 40], fill=(2, 132, 199))
        draw.text((x + 48, box_y + 15), title, fill=(8, 28, 59), font=font_bold)
        draw.text((x + 48, box_y + 45), desc, fill=(71, 85, 105), font=font_small)

    # Product Range Section
    draw.text((70, 890), 'FLAGSHIP PRODUCT CATALOGUE & CAPACITIES', fill=(8, 28, 59), font=font_heading)
    
    products = [
        ('Zoftnor Max Easyfit W1', 'Flow: 1,000 LPH | 1-2 BHK Homes | 1 Inch', '₹54,087'),
        ('Zoftnor Max Easyfit W2', 'Flow: 2,000 LPH | 2-3 BHK Homes | 1 Inch', '₹59,708'),
        ('Zoftnor Max Easyfit W3', 'Flow: 3,000 LPH | 3-4 BHK Luxury Villas | 1.25 Inch', '₹66,820'),
        ('Zoftnor Max Easyfit W4', 'Flow: 4,000 LPH | Large Estates & Cafes | 1.5 Inch', '₹78,969'),
        ('Zoftnor Max Easyfit W6', 'Flow: 6,000 LPH | Commercial & Community | 2 Inch', '₹83,855'),
        ('Zoftnor Pro W1 / W2', 'Flow: 1,000 - 2,000 LPH | 18-Level MMO & Iridium', '₹78,000'),
        ('Mini Zoftnor', 'Micro-device for Bath Showers & Individual Taps', '₹3,848'),
        ('Bounten Descaler', 'Inline Appliance Scale Guard for Geysers & Washers', '₹2,748')
    ]
    
    py = 940
    for p_name, p_spec, p_price in products:
        draw.rectangle([70, py, w - 70, py + 55], fill=(255, 255, 255), outline=(226, 232, 240), width=1)
        draw.text((95, py + 16), p_name, fill=(8, 28, 59), font=font_bold)
        draw.text((450, py + 18), p_spec, fill=(71, 85, 105), font=font_body)
        draw.text((1040, py + 16), p_price, fill=(2, 132, 199), font=font_bold)
        py += 65

    # Footer
    draw.rectangle([0, h - 160, w, h], fill=(8, 28, 59))
    draw.text((70, h - 135), 'Head Office: KNR Corporate Office Bldg, Care Hospital Back Side, Banjara Hills, Hyderabad - 500004', fill=(203, 213, 225), font=font_small)
    draw.text((70, h - 105), 'Distributor (TN): Global Talent Nexus, Cauvery Nagar Extn, Trichy | Marketing: Medilight Hydrohealth Pvt Ltd', fill=(203, 213, 225), font=font_small)
    draw.text((70, h - 75), 'Website: bounten.com | Email: hyderabad@bounten.com | Official Product Brochure 2026', fill=(14, 165, 233), font=font_small)
    
    return img

page1 = create_brochure_page_1()
page1.save('public/bounten-brochure.pdf', 'PDF', resolution=150.0)
page1.save('public/bounten-flyer.pdf', 'PDF', resolution=150.0)
print('PDF files updated with exact logo!')

