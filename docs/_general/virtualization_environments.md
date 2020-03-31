---
title: Virtualization Environments
layout: default
description: How to use the OVF image with your virtualization software
weight: 90
status: Preliminary
---

OntoPortal OVF works in Virtualization environments such as VMware, VirtualBox, KVM, and Xen.
Instructions for each of these are provided below.

## VMware
You can use VMware's ovftool to convert the appliance to work with your VMware product. 
For example, to convert the appliance for use in VMware Player or Workstation, you would run the command:

`ovftool ncbo-appliance.ovf ncbo-appliance.vmx`

## VirtualBox
VirtualBox supports importing OVF images directly. 
Simply start your VirtualBox software, 
then select File->Import Appliance and select the OVF file included in the NCBO Virtual Appliance download.

## KVM
First, convert the OVF to VMX format as mentioned in the VMware section above.

Next, ensure that the kvm-qemu-img RPM (or qemu-kvm DEB) is installed. 
Then, convert the [new] VMDKs (from the VMX conversion step) to raw disk images via the following command:

`for disk in \`ls -1 \*.vmdk; do diskbase=\`basename $disk .vmdk\`; qemu-img convert -O raw ${diskbase}.vmdk ${diskbase}.img; done`

Create /etc/libvirt/qemu/ncbo-appliance.xml with the following contents:
```
<domain type='kvm'>
  <name>ncbo-appliance</name>
  <memory>4194304</memory>
  <vcpu>2</vcpu>
  <os>
    <type arch='x86_64' machine='rhel5.4.0'>hvm</type>
    <boot dev='hd'/>
  </os>
  <features>
    <acpi/>
    <apic/>
    <pae/>
  </features>
  <clock offset='utc'>
    <timer name='pit' tickpolicy='delay'/>
  </clock>
  <on_poweroff>destroy</on_poweroff>
  <on_reboot>restart</on_reboot>
  <on_crash>restart</on_crash>
  <devices>
    <emulator>/usr/libexec/qemu-kvm</emulator>
    <disk type='file' device='disk'>
      <driver name='qemu' type='raw'/>
      <source file='/var/lib/libvirt/images/ncbo-appliance/ncbo-appliance-disk1.img'/>
      <target dev='hda' bus='ide'/>
      <address type='drive' controller='0' bus='0' unit='0'/>
    </disk>
    <disk type='file' device='disk'>
      <driver name='qemu' type='raw'/>
      <source file='/var/lib/libvirt/images/ncbo-appliance/ncbo-appliance-disk2.img'/>
      <target dev='hdb' bus='ide'/>
      <address type='drive' controller='0' bus='0' unit='1'/>
    </disk>
    <controller type='ide' index='0'/>
    <interface type='network'>
      <source network='default'/>
      <model type='virtio'/>
    </interface>
    <serial type='pty'>
      <target port='0'/>
    </serial>
    <console type='pty'>
      <target port='0'/>
    </console>
    <input type='mouse' bus='ps2'/>
    <graphics type='vnc' port='-1' autoport='yes' keymap='en-us'/>
    <video>
      <model type='cirrus' vram='9216' heads='1'/>
    </video>
  </devices>
</domain>
```

Finally, make any necessary edits to the above file, and run:

`virsh start ncbo-appliance`

### Xen
First, convert the VMDKs to raw disk images as mentioned in the KVM section above.

Create /etc/xen/ncbo-appliance.cfg with the following contents:

```
name = "ncbo-appliance"
memory = 4096
vcpus = 2
builder = "hvm"
kernel = "/usr/lib/xen/boot/hvmloader"
boot = "c"
pae = 1
acpi = 1
apic = 1
localtime = 0
on_poweroff = "destroy"
on_reboot = "destroy"
on_crash = "destroy"
device_model = "/usr/lib64/xen/bin/qemu-dm"
sdl = 0
vnc = 1
vncunused = 1
keymap = "en-us"
disk = [ "file:/var/lib/xen/images/ncbo-appliance/ncbo-appliance-disk1.img,hda,w", "file:/var/lib/xen/images/ncbo-appliance/ncbo-appliance-disk2.img,hdb,w" ]
vif = [ "bridge=xenbr0,script=vif-bridge,vifname=vif41.0" ]
parallel = "none"
serial = "pty"
```

Finally, make any necessary edits to the above file, and run:

`xm create ncbo-appliance`
